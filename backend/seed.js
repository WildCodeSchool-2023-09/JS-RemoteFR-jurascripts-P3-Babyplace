require("dotenv").config();

const database = require("./database/client");

const seed = async () => {
  try {
    const queries = [];

    await database.query("delete from users");
    queries.push(
      database.query(
        "insert into users (email, hashed_password, profile, confirmation_inscription, confirmation_date_sent, created_date, last_connection) values ('picotipicota@structure.fr', 'baby', 'Structure', '1', '2024-01-01 00:00:00', '2024-01-01 00:00:00', '2024-01-01 00:00:00')"
      )
    );
    queries.push(
      database.query(
        "insert into users (email, hashed_password, profile, confirmation_inscription, confirmation_date_sent, created_date, last_connection) values ('papapoule@papaoule.fr', 'papapoule', 'Parent', '1', '2024-01-01 00:00:00', '2024-01-01 00:00:00', '2024-01-01 00:00:00')"
      )
    );

    await database.query("delete from structures");
    queries.push(
      database.query(
        "insert into structures (user_id, name, description, address, address_complements, zip_code, city, phone_number, email, activities, welcomes, experiences, prices) values ('1','BabyWilder', 'lorem ipsum', '33 Wild Code Place', '', '33000', 'Bordeaux', '05.56.56.56.56', 'picotipicota@structure.com', 'Promenade Musique Activités déveil', 'Sorties extérieures Repas maison Foyer non fumeur', 'Formation premier secours Formation nesting Pédagogie Montessori', '3.50')"
      )
    );

    await database.query("delete from parents");
    queries.push(
      database.query(
        "insert into parents (user_id, first_name, last_name, birth_name, terms_accepted, date_acceptance_terms, marital_status, address, address_complements, zip_code, city, phone_number, email, profession) values ('2','Papa', 'Poule', 'Poule', '1', '2024-01-01 00:00:00', 'Married', '12 impasse de la rue imaginaire', '', '33000', 'Bordeaux', '0607080910', 'papapoule@papaoule.fr', 'Papa à domicile')"
      )
    );
    await database.query("delete from child");
    queries.push(
      database.query(
        "insert into child (parent_id, first_name, last_name, date_of_birth, walker ) values ('1', 'Bébé', 'Wilder', '2023-01-01', '1')"
      )
    );
    await database.query("delete from reservation");
    queries.push(
      database.query(
        "insert into reservation (parent_id,child_id, status, reservation_date_start, reservation_date_end, start_time, end_time, prices ) values ('1','1', 'waiting', '2024-02-09', '2024-02-09', '08:00:00', '18:00:00', '35.00')"
      )
    );
    queries.push(
      database.query(
        "insert into reservation (parent_id,child_id, status, reservation_date_start, reservation_date_end, start_time, end_time, prices ) values ('1','1', 'waiting', '2024-02-09', '2024-02-09', '09:00:00', '17:00:00', '28.00')"
      )
    );

    await database.query("delete from employees");
    queries.push(
      database.query(
        "insert into employees (structure_id, first_name, last_name, qualification, max_children_capacity) values ('1','Carole', 'Toto', 'Employee', '3')"
      )
    );
    queries.push(
      database.query(
        "insert into employees (structure_id, first_name, last_name, qualification, max_children_capacity) values ('1','Nadine', 'Toto', 'Employee', '3')"
      )
    );
    queries.push(
      database.query(
        "insert into employees (structure_id, first_name, last_name, qualification, max_children_capacity) values ('1','Nicole', 'Toto', 'Employee', '3')"
      )
    );

    await Promise.all(queries);
    database.end();
    console.info(`${database.databaseName} filled from ${__filename} 🌱`);
  } catch (err) {
    console.error("Error filling the database:", err.message);
  }
};

seed();
