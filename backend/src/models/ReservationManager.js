const AbstractManager = require("./AbstractManager");

class ReservationManager extends AbstractManager {
  constructor() {
    // Call the constructor of the parent class (AbstractManager)
    // and pass the table name "reservation" as configuration
    super({ table: "reservation" });
  }

  // The C of CRUD - Create operation

  async create({
    status,
    rejectionReason,
    reservationDate,
    startTime,
    endTime,
    createdDate,
  }) {
    // Execute the SQL INSERT query to add a new item to the "reservation" table
    const [rows] = await this.database.query(
      `INSERT INTO ${this.table} (status, rejection_reason, reservation_date, start_time, end_time, created_date) VALUES (?,?,?,?,?,?)`,
      [
        status,
        rejectionReason,
        reservationDate,
        startTime,
        endTime,
        createdDate,
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

  async update({
    status,
    rejectionReason,
    reservationDate,
    startTime,
    endTime,
    createdDate,
    id,
  }) {
    const [rows] = await this.database.query(
      ` UPDATE ${this.table} SET status = ?, rejection_reason = ?, reservation_date = ?, start_time = ?, end_time = ?, created_date = ? WHERE id = ?`,
      [
        status,
        rejectionReason,
        reservationDate,
        startTime,
        endTime,
        createdDate,
        id,
      ]
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
