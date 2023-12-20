const AbstractManager = require("./AbstractManager");

class StructureManager extends AbstractManager {
  constructor() {
    // Call the constructor of the parent class (AbstractManager)
    // and pass the table name "item" as configuration
    super({ table: "structures" });
  }

  // The C of CRUD - Create operation

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
    // Execute the SQL INSERT query to add a new item to the "item" table
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

    // Return the ID of the newly inserted item
    return rows.insertId;
  }

  // The Rs of CRUD - Read operations

  async read(id) {
    // Execute the SQL SELECT query to retrieve a specific item by its ID
    const [rows] = await this.database.query(
      `SELECT * FROM ${this.table} WHERE id = ?`,
      [id]
    );

    // Return the first row of the rows, which represents the item
    return rows[0];
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all items from the "item" table
    const [rows] = await this.database.query(`SELECT * FROM ${this.table}`);

    // Return the array of items
    return rows;
  }

  // The U of CRUD - Update operation
  // TODO: Implement the update operation to modify an existing item

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

  // The D of CRUD - Delete operation
  // TODO: Implement the delete operation to remove an item by its ID

  async delete(id) {
    const [rows] = await this.database.query(
      `DELETE FROM ${this.table} WHERE id = ?`,
      [id]
    );
    return [rows];
  }
}

module.exports = StructureManager;
