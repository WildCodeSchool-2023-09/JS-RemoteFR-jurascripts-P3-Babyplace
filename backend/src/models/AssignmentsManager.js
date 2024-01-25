const AbstractManager = require("./AbstractManager");

class assignmentsManager extends AbstractManager {
  constructor() {
    super({ table: "employees_assignments" });
  }

  // C
  async create({ reservationId }) {
    const [rows] = await this.database.query(
      `INSERT INTO ${this.table} (reservation_id) VALUES (?)`,
      [reservationId]
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
  async update({ reservationId, employeeId, id }) {
    const [rows] = await this.database.query(
      `UPDATE ${this.table} SET reservation_id=?, employee_id=? WHERE id=?`,
      [reservationId, employeeId, id]
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

  async createAssignment({ reservationId, employeeId }) {
    const [rows] = await this.database.query(
      `INSERT INTO ${this.table} (reservation_id, employee_id) VALUES (?, ?)`,
      [reservationId, employeeId]
    );
    return {
      insertId: rows.insertId,
      reservationId,
      employeeId,
    };
  }
}
module.exports = assignmentsManager;
