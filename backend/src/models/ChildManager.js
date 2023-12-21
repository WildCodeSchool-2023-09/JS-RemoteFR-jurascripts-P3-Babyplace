const AbstractManager = require("./AbstractManager");

class ChildManager extends AbstractManager {
  constructor() {
    // Call the constructor of the parent class (AbstractManager)
    // and pass the table name "child" as configuration
    super({ table: "child" });
  }

  // The C of CRUD - Create operation

  async create({
    firstName,
    lastName,
    dateOfBirth,
    walker,
    nameOfDoctor,
    allergies,
    alimentation,
  }) {
    // Execute the SQL INSERT query to add a new item to the "child" table
    const [rows] = await this.database.query(
      `INSERT INTO ${this.table} (first_name, last_name, date_of_birth, walker, name_of_doctor, allergies, alimentation) VALUES (?,?,?,?,?,?,?)`,
      [
        firstName,
        lastName,
        dateOfBirth,
        walker,
        nameOfDoctor,
        allergies,
        alimentation,
      ]
    );

    // Return the ID of the newly inserted child
    return rows.insertId;
  }

  // The Rs of CRUD - Read operations

  async read(id) {
    // Execute the SQL SELECT query to retrieve a specific child by its ID
    const [rows] = await this.database.query(
      `SELECT * FROM ${this.table} WHERE id = ?`,
      [id]
    );

    // Return the first row of the result, which represents the child
    return [rows];
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all items from the "child" table
    const [rows] = await this.database.query(`SELECT * FROM ${this.table}`);

    // Return the array of items
    return [rows];
  }

  // The U of CRUD - Update operation
  // TODO: Implement the update operation to modify an existing child

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

  // The D of CRUD - Delete operation
  // TODO: Implement the delete operation to remove an child by its ID

  async delete(id) {
    const [rows] = await this.database.query(
      `DELETE FROM ${this.table} where id = ?`,
      [id]
    );

    return [rows];
  }
}

module.exports = ChildManager;
