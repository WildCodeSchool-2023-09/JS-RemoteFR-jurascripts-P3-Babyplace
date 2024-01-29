const AbstractManager = require("./AbstractManager");

class DocumentsManager extends AbstractManager {
  constructor() {
    super({ table: "documents" });
  }

  // C
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

  // D
  async delete(id) {
    const [rows] = await this.database.query(
      `DELETE FROM ${this.table} WHERE id = ?`,
      [id]
    );
    return [rows];
  }
}

module.exports = DocumentsManager;
