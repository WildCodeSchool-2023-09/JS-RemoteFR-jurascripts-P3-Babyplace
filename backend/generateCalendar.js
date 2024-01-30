require("dotenv").config();

const mysql = require("mysql2/promise");

const { DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_NAME } = process.env;

const runProcedure = async () => {
  try {
    const connection = await mysql.createConnection({
      host: DB_HOST,
      port: DB_PORT,
      user: DB_USER,
      password: DB_PASSWORD,
    });
    await connection.query(`USE ${DB_NAME}`);
    await connection.beginTransaction();
    await connection.query("DROP PROCEDURE IF EXISTS GenerateSlots");
    await connection.query(`
      CREATE PROCEDURE GenerateSlots()
      BEGIN
        DECLARE done INT DEFAULT FALSE;
        DECLARE emp_id, max_capacity INT;
        DECLARE start_date, end_date DATE;
        DECLARE start_time, end_time TIME;
        DECLARE cur CURSOR FOR SELECT id, max_children_capacity FROM employees;
        DECLARE CONTINUE HANDLER FOR NOT FOUND SET done = TRUE;
        OPEN cur;
        read_loop: LOOP
          FETCH cur INTO emp_id, max_capacity;
          IF done THEN
            LEAVE read_loop;
          END IF;
          SET start_date = CURDATE();
          SET end_date = DATE_ADD(CURDATE(), INTERVAL 15 DAY);
          date_loop: LOOP
            IF start_date > end_date THEN
              LEAVE date_loop;
            END IF;
            SET start_time = '07:00:00';
            time_loop: LOOP
              IF TIME_TO_SEC(start_time) >= TIME_TO_SEC('18:00:00') THEN
                LEAVE time_loop;
              END IF;
              SET end_time = ADDTIME(start_time, '00:30:00');
              INSERT INTO employees_disponibilities (employee_id, start_date, end_date, start_time, end_time, number_of_places)
              VALUES (emp_id, start_date, start_date, start_time, end_time, max_capacity);
              SET start_time = ADDTIME(start_time, '00:30:00');
            END LOOP time_loop;
            SET start_date = DATE_ADD(start_date, INTERVAL 1 DAY);
          END LOOP date_loop;
        END LOOP read_loop;
        CLOSE cur;
      END
    `);

    await connection.commit();
    await connection.query("CALL GenerateSlots()");
    console.info("Employee slots generated successfully 💩");
    connection.end();
  } catch (error) {
    console.error("Error running procedure:", error.message);
  }
};

runProcedure();
