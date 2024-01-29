const AbstractManager = require("./AbstractManager");

class EmployeesManager extends AbstractManager {
  constructor() {
    super({ table: "employees" });
  }

  // C
  async create({
    structureId,
    firstName,
    lastName,
    qualification,
    maxChildrenCapacity,
  }) {
    const [rows] = await this.database.query(
      `INSERT INTO ${this.table} (structure_id, first_name,last_name,qualification,max_children_capacity) VALUES (?,?,?,?,?)`,
      [structureId, firstName, lastName, qualification, maxChildrenCapacity]
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
    firstName,
    lastName,
    qualification,
    maxChildrenCapacity,
    id,
  }) {
    const [rows] = await this.database.query(
      `UPDATE ${this.table} SET  first_name = ?, last_name = ?, qualification = ?, max_children_capacity = ? WHERE id = ?`,
      [firstName, lastName, qualification, maxChildrenCapacity, id]
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

module.exports = EmployeesManager;
