const AbstractManager = require("./AbstractManager");

class StructureManager extends AbstractManager {
  constructor() {
    super({ table: "structures" });
  }

  // C
  async create({
    userId,
    name,
    description,
    address,
    addressComplements,
    zipCode,
    city,
    phoneNumber,
    email,
    activities,
    welcomes,
    experiences,
    prices,
  }) {
    const [rows] = await this.database.query(
      `INSERT INTO ${this.table} (user_id, name, description, address, address_complements, zip_code, city, phone_number, email, activities, welcomes, experiences, prices) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)`,
      [
        userId,
        name,
        description,
        address,
        addressComplements,
        zipCode,
        city,
        phoneNumber,
        email,
        activities,
        welcomes,
        experiences,
        prices,
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

  async readByUserId(userId) {
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
    name,
    description,
    address,
    addressComplements,
    zipCode,
    city,
    phoneNumber,
    email,
    activities,
    welcomes,
    experiences,
    prices,
    id,
  }) {
    const [rows] = await this.database.query(
      ` UPDATE ${this.table} SET name = ?, description = ?, address = ?, address_complements = ?, zip_code = ?, city = ?, phone_number = ?, email = ?, activities = ?, welcomes = ?, experiences = ?, prices = ? WHERE id = ?`,
      [
        name,
        description,
        address,
        addressComplements,
        zipCode,
        city,
        phoneNumber,
        email,
        activities,
        welcomes,
        experiences,
        prices,
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

module.exports = StructureManager;
