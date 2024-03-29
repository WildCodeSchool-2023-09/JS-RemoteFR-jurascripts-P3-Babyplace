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

  async getAvailableEmployees() {
    const [rows] = await this.database.query(
      `SELECT * 
      FROM employees 
      JOIN ${this.table} ON employees.id = ${this.table}.employee_id 
      WHERE ${this.table}.start_date >= current_date() 
      AND ${this.table}.number_of_places > 0`
    );
    return rows;
  }

  async getEmployeeAvailability() {
    const [rows] = await this.database.query(
      `SELECT employees.id, employees.first_name, employees.last_name, employees_disponibilities.number_of_places as available_places
    FROM employees
    LEFT JOIN ${this.table} ON employees.id = employees_disponibilities.employee_id
    WHERE employees_disponibilities.slot_id = ?;`
    );
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

  async decrementPlaces(id) {
    const [rows] = await this.database.query(
      `UPDATE ${this.table} SET number_of_places = number_of_places - 1 WHERE id = ?`,
      [id]
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
