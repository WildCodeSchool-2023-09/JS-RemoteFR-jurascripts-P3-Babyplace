const AbstractManager = require("./AbstractManager");

class disponibilitiesManager extends AbstractManager {
  constructor() {
    super({ table: "employees_disponibilities" });
  }

  // C
  async create({
    employeeId,
    availableDate,
    startTime,
    endTime,
    numberOfPlaces,
  }) {
    const [rows] = await this.database.query(
      `INSERT INTO ${this.table} (employee_id, available_date, start_time, end_time, number_of_places) VALUES (?,?,?,?,?)`,
      [employeeId, availableDate, startTime, endTime, numberOfPlaces]
    );
    return rows.insertId;
  }

  // R
  async read(id) {
    const [rows] = await this.database.query(
      `SELECT * FROM ${this.table} WHERE id = ?`,
      [id]
    );
    return rows[0];
  }

  async readAll() {
    const [rows] = await this.database.query(`SELECT * FROM ${this.table}`);
    return rows;
  }

  // U
  async update({
    employeeId,
    availableDate,
    startTime,
    endTime,
    numberOfPlaces,
    id,
  }) {
    const [rows] = await this.database.query(
      `UPDATE ${this.table} SET employee_id=?, available_date=?, start_time=?, end_time=?, number_of_places=? WHERE id=?`,
      [employeeId, availableDate, startTime, endTime, numberOfPlaces, id]
    );
    return [rows];
  }

  // D
  async delete(id) {
    const [rows] = await this.database.query(
      `DELETE FROM ${this.table} WHERE id = ?`,
      [id]
    );
    return [rows];
  }
}

module.exports = disponibilitiesManager;
