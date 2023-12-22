const AbstractManager = require("./AbstractManager");

class ParentsManager extends AbstractManager {
  constructor() {
    // Call the constructor of the parent class (AbstractManager)
    // and pass the table name "item" as configuration
    super({ table: "parents" });
  }

  // The C of CRUD - Create operation

  async create({
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
    // Execute the SQL INSERT query to add a new parents to the "parents" table
    const [result] = await this.database.query(
      `INSERT INTO ${this.table} ( first_name, last_name, birth_name, terms_accepted, date_acceptance_terms, marital_status, address, address_complements, zip_code, city, phone_number, email, profession) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)`,
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
      ]
    );

    // Return the ID of the newly inserted parents
    return result.insertId;
  }

  // The Rs of CRUD - Read operations

  async read(id) {
    // Execute the SQL SELECT query to retrieve a specific parents by its ID
    const [rows] = await this.database.query(
      `SELECT * FROM ${this.table} WHERE id = ?`,
      [id]
    );

    // Return the first row of the result, which represents the parents
    return rows[0];
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all parents from the "parents" table
    const [rows] = await this.database.query(`SELECT * FROM ${this.table}`);

    // Return the array of parents
    return rows;
  }

  // The U of CRUD - Update operation
  // TODO: Implement the update operation to modify an existing parents

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

  // The D of CRUD - Delete operation
  // TODO: Implement the delete operation to remove an parents by its ID

  async delete(id) {
    const [rows] = await this.database.query(
      `DELETE FROM ${this.table} WHERE id = ?`,
      [id]
    );
    return [rows];
  }
}

module.exports = ParentsManager;
