const AbstractManager = require("./AbstractManager");

class ParentsManager extends AbstractManager {
  constructor() {
    super({ table: "parents" });
  }

  // C
  async create({
    userId,
    firstName,
    lastName,
    birthName,
    termsAccepted,
    dateAcceptanceTerms,
    maritalStatus,
    address,
    addressComplements,
    zipCode,
    city,
    phoneNumber,
    email,
    profession,
  }) {
    const [result] = await this.database.query(
      `INSERT INTO ${this.table} (user_id, first_name, last_name, birth_name, terms_accepted, date_acceptance_terms, marital_status, address, address_complements, zip_code, city, phone_number, email, profession) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?)`,
      [
        userId,
        firstName,
        lastName,
        birthName,
        termsAccepted,
        dateAcceptanceTerms,
        maritalStatus,
        address,
        addressComplements,
        zipCode,
        city,
        phoneNumber,
        email,
        profession,
      ]
    );
    return result.insertId;
  }

  async createForReservation({ firstName, lastName }) {
    await this.database.query(
      `INSERT INTO ${this.table} ( first_name, last_name ) VALUES (?,?)`,
      [firstName, lastName]
    );
  }

  // R
  async read(userId) {
    const [rows] = await this.database.query(
      `SELECT * FROM ${this.table} WHERE user_id = ?`,
      [userId]
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
    birthName,
    termsAccepted,
    dateAcceptanceTerms,
    maritalStatus,
    address,
    addressComplements,
    zipCode,
    city,
    phoneNumber,
    email,
    profession,
    id,
  }) {
    const [rows] = await this.database.query(
      `UPDATE ${this.table} SET first_name=?, last_name=?, birth_name=?, terms_accepted=?, date_acceptance_terms=?, marital_status=?, address=?, address_complements=?, zip_code=?, city=?, phone_number=?, email=?, profession=? WHERE id=?`,
      [
        firstName,
        lastName,
        birthName,
        termsAccepted,
        dateAcceptanceTerms,
        maritalStatus,
        address,
        addressComplements,
        zipCode,
        city,
        phoneNumber,
        email,
        profession,
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

module.exports = ParentsManager;
