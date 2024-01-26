const AbstractManager = require("./AbstractManager");

class ReservationManager extends AbstractManager {
  constructor() {
    // Call the constructor of the parent class (AbstractManager)
    // and pass the table name "reservation" as configuration
    super({ table: "reservation" });
  }

  // The C of CRUD - Create operation

  async create({
    rejectionReason,
    reservationDateStart,
    startTime,
    endTime,
    prices,
  }) {
    // Execute the SQL INSERT query to add a new item to the "reservation" table
    const [rows] = await this.database.query(
      `INSERT INTO ${this.table} (status, rejection_reason, reservation_date_start, start_time, end_time, created_date, prices) VALUES (?,?,?,?,?,?,?)`,
      [
        "waiting",
        rejectionReason,
        new Date(reservationDateStart),
        new Date(startTime),
        new Date(endTime),
        new Date(Date.now()),
        prices,
      ]
    );

    // Return the ID of the newly inserted reservation
    return rows.insertId;
  }

  // The Rs of CRUD - Read operations

  async read(id) {
    // Execute the SQL SELECT query to retrieve a specific item by its ID
    const [rows] = await this.database.query(
      `SELECT * FROM ${this.table} WHERE id = ?`,
      [id]
    );

    // Return the first row of the rows, which represents the item
    return rows[0];
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all items from the "item" table
    const [rows] = await this.database.query(`SELECT * FROM ${this.table}`);

    // Return the array of items
    return rows;
  }

  // The U of CRUD - Update operation
  // TODO: Implement the update operation to modify an existing reservation

  async readForCalendar() {
    const [rows] = await this.database.query(
      `SELECT * FROM ${this.table} WHERE status = 'accepted'`
    );

    return Promise.all(
      rows.map(async (event) => {
        const [child] = await this.database.query(
          `SELECT * FROM child WHERE id = ?`,
          [event.child_id]
        );
        const [parent] = await this.database.query(
          `SELECT * FROM parents WHERE id = ?`,
          [event.parent_id]
        );
        return {
          id: event.id,
          parent_name: `${parent[0].first_name} ${parent[0].last_name}`,
          child_name: `${child[0].first_name} ${child[0].last_name}`,
          reservationDateStart: event.reservation_date_start,
          reservationDateEnd: event.reservation_date_end,
          startTime: event.start_time,
          endTime: event.end_time,
        };
      })
    );
  }

  async readForListRequests() {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const [rows] = await this.database.query(
      `SELECT * FROM ${this.table} WHERE reservation_date_start >= ?`,
      [today]
    );

    return Promise.all(
      rows.map(async (event) => {
        const [child] = await this.database.query(
          `SELECT * FROM child WHERE id = ?`,
          [event.child_id]
        );
        const [parent] = await this.database.query(
          `SELECT * FROM parents WHERE id = ?`,
          [event.parent_id]
        );
        return {
          id: event.id,
          parentName: `${parent[0].first_name} ${parent[0].last_name}`,
          childName: `${child[0].first_name} ${child[0].last_name}`,
          reservationDateStart: event.reservation_date_start,
          reservationDateEnd: event.reservation_date_end,
          startTime: event.start_time,
          endTime: event.end_time,
          status: event.status,
          prices: event.prices,
        };
      })
    );
  }

  // The U of CRUD - Update operation
  // TODO: Implement the update operation to modify an existing reservation

  async updateAll({
    status,
    rejectionReason,
    reservationDateStart,
    reservationDateEnd,
    startTime,
    endTime,
    createdDate,
    prices,
    id,
  }) {
    const [rows] = await this.database.query(
      ` UPDATE ${this.table} SET status = ?, rejection_reason = ?, reservation_date_start = ?, reservation_date_end = ?, start_time = ?, end_time = ?, created_date = ?, prices = ? WHERE id = ?`,
      [
        status,
        rejectionReason,
        reservationDateStart,
        reservationDateEnd,
        startTime,
        endTime,
        createdDate,
        prices,
        id,
      ]
    );
    return [rows];
  }

  async update({ status, id }) {
    const [rows] = await this.database.query(
      ` UPDATE ${this.table} SET status = ? WHERE id = ?`,
      [status, id]
    );
    return [rows];
  }

  // The D of CRUD - Delete operation
  // TODO: Implement the delete operation to remove a reservation by its ID

  async delete(id) {
    const [rows] = await this.database.query(
      `DELETE FROM ${this.table} where id = ?`,
      [id]
    );

    return [rows];
  }
}

module.exports = ReservationManager;
