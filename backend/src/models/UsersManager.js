const AbstractManager = require("./AbstractManager");

class usersManager extends AbstractManager {
  constructor() {
    super({ table: "users" });
  }

  // C
  async create({
    email,
    hashedPassword,
    profile,
    confirmationInscription,
    confirmationDateSent,
    createdDate,
    lastConnection,
  }) {
    const [rows] = await this.database.query(
      `INSERT INTO ${this.table} (email, hashed_password, profile, confirmation_inscription, confirmation_date_sent, created_date, last_connection) VALUES (?,?,?,?,?,?,?)`,
      [
        email,
        hashedPassword,
        profile,
        confirmationInscription,
        confirmationDateSent,
        createdDate,
        lastConnection,
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

  async readByEmailWithPassword(email) {
    const [rows] = await this.database.query(
      `select * from ${this.table} where email = ?`,
      [email]
    );
    return rows[0];
  }

  // U
  async update({
    email,
    hashedPassword,
    profile,
    confirmationInscription,
    confirmationDateSent,
    createdDate,
    lastConnection,
    id,
  }) {
    const [rows] = await this.database.query(
      `UPDATE ${this.table} SET email=?, hashed_password=?, profile=?, confirmation_inscription=?, confirmation_date_sent=?, created_date=?, last_connection=? WHERE id=?`,
      [
        email,
        hashedPassword,
        profile,
        confirmationInscription,
        confirmationDateSent,
        createdDate,
        lastConnection,
        id,
      ]
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

module.exports = usersManager;
