const AbstractManager = require("./AbstractManager");

class ChildManager extends AbstractManager {
  constructor() {
    super({ table: "child" });
  }

  // C
  async create({
    firstName,
    lastName,
    dateOfBirth,
    walker,
    nameOfDoctor,
    allergies,
    alimentation,
    parentId,
  }) {
    const [rows] = await this.database.query(
      `INSERT INTO ${this.table} (first_name, last_name, date_of_birth, walker, name_of_doctor, allergies, alimentation, parent_id) VALUES (?,?,?,?,?,?,?,?)`,
      [
        firstName,
        lastName,
        dateOfBirth,
        walker,
        nameOfDoctor,
        allergies,
        alimentation,
        parentId,
      ]
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

  async readByParentId(parentId) {
    const [rows] = await this.database.query(
      `SELECT * FROM ${this.table} WHERE parent_id = ?`,
      [parentId]
    );
    return rows[0];
  }

  // U
  async update({
    firstName,
    lastName,
    dateOfBirth,
    walker,
    nameOfDoctor,
    allergies,
    alimentation,
    id,
  }) {
    const [rows] = await this.database.query(
      `UPDATE ${this.table} SET first_name= ?, last_name= ?, date_of_birth= ?, walker= ?, name_of_doctor= ?, allergies= ?, alimentation= ? WHERE id= ?`,
      [
        firstName,
        lastName,
        dateOfBirth,
        walker,
        nameOfDoctor,
        allergies,
        alimentation,
        id,
      ]
    );

    return [rows];
  }

  // D
  async delete(id) {
    const [rows] = await this.database.query(
      `DELETE FROM ${this.table} where id = ?`,
      [id]
    );

    return [rows];
  }
}

module.exports = ChildManager;
