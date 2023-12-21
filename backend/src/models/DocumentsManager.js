const AbstractManager = require("./AbstractManager");

class DocumentsManager extends AbstractManager {
  constructor() {
    // Call the constructor of the parent class (AbstractManager)
    // and pass the table name "item" as configuration
    super({ table: "documents" });
  }

  // The C of CRUD - Create operation

  async create({
    reservationFolderId,
    documentTypeId,
    added,
    uploadDate,
    fileName,
    storagePath,
    type,
    origin,
  }) {
    // Execute the SQL INSERT query to add a new item to the "item" table
    const [rows] = await this.database.query(
      `INSERT INTO ${this.table} (reservation_folder_id, document_type_id, added, upload_date, file_name, storage_path, type, origin) VALUES (?,?,?,?,?,?,?,?)`,
      [
        reservationFolderId,
        documentTypeId,
        added,
        uploadDate,
        fileName,
        storagePath,
        type,
        origin,
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
    documentTypeId,
    added,
    uploadDate,
    fileName,
    storagePath,
    type,
    origin,
  }) {
    const [rows] = await this.database.query(
      ` UPDATE ${this.table} SET document_type_id = ?, added = ?, upload_date = ?, file_name = ?, storage_path = ?, type = ?, origin = ?`,
      [documentTypeId, added, uploadDate, fileName, storagePath, type, origin]
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

module.exports = DocumentsManager;
