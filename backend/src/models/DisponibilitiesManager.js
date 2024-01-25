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

  // Employee disponibilities avaible for a specific date and time
  async getAvailableEmployees() {
    const [rows] = await this.database.query(
      `SELECT * FROM employees 
      JOIN ${this.table} ON employees.id = ${this.table}.employee_id 
      WHERE ${this.table}.start_date >= current_date() 
      AND ${this.table}.number_of_places > 0`
    );
    return rows;
  }

  async getEmployeeAvailability() {
    const [rows] = await this.database.query(
      `SELECT e.id, e.first_name, e.last_name, ed.number_of_places as available_places
    FROM employees e
    LEFT JOIN ${this.table} ed ON e.id = ed.employee_id
    WHERE ed.slot_id = ?;`
    );
    return rows;
  }

  // Decrement places
  async decrementPlaces(id) {
    const [rows] = await this.database.query(
      `UPDATE ${this.table} SET number_of_places = number_of_places - 1 WHERE id = ?`,
      [id]
    );
    return [rows];
  }
}

module.exports = disponibilitiesManager;
