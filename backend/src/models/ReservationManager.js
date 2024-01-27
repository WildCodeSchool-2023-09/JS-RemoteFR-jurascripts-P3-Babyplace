const AbstractManager = require("./AbstractManager");

class ReservationManager extends AbstractManager {
  constructor() {
    super({ table: "reservation" });
  }

  // The C of CRUD - Create operation
  async create({
    parentId,
    reservationDateStart,
    reservationDateEnd,
    startTime,
    endTime,
    prices,
  }) {
    const [rows] = await this.database.query(
      `INSERT INTO ${this.table} (parent_id, status, reservation_date_start, reservation_date_end, start_time, end_time, created_date, prices) VALUES (?,?,?,?,?,?,?,?)`,
      [
        parentId,
        "in_progress",
        new Date(reservationDateStart),
        new Date(reservationDateEnd),
        new Date(startTime),
        new Date(endTime),
        new Date(Date.now()),
        prices,
      ]
    );
    return rows.insertId;
  }

  // The R of CRUD - Read operations
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

  async readForCalendar() {
    const [rows] = await this.database.query(
      `SELECT * FROM ${this.table} WHERE status = 'accepted'`
    );
    return Promise.all(
      rows.map(async (event) => {
        const [child] = await this.database.query(
          `SELECT * FROM child WHERE id = ?`,
          [event.child_id]
        );
        const [parent] = await this.database.query(
          `SELECT * FROM parents WHERE id = ?`,
          [event.parent_id]
        );
        return {
          id: event.id,
          parent_name: `${parent[0].first_name} ${parent[0].last_name}`,
          child_name: `${child[0].first_name} ${child[0].last_name}`,
          reservationDateStart: event.reservation_date_start,
          reservationDateEnd: event.reservation_date_end,
          startTime: event.start_time,
          endTime: event.end_time,
        };
      })
    );
  }

  async readForListRequests() {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const [rows] = await this.database.query(
      `SELECT * FROM ${this.table} WHERE reservation_date_start >= ?`,
      [today]
    );
    return Promise.all(
      rows.map(async (event) => {
        const [child] = await this.database.query(
          `SELECT * FROM child WHERE id = ?`,
          [event.child_id]
        );
        const [parent] = await this.database.query(
          `SELECT * FROM parents WHERE id = ?`,
          [event.parent_id]
        );
        return {
          id: event.id,
          parentName: `${parent[0].first_name} ${parent[0].last_name}`,
          childName: `${child[0].first_name} ${child[0].last_name}`,
          reservationDateStart: event.reservation_date_start,
          reservationDateEnd: event.reservation_date_end,
          startTime: event.start_time,
          endTime: event.end_time,
          status: event.status,
          prices: event.prices,
        };
      })
    );
  }

  async getReservationByParentId(parentId) {
    const [rows] = await this.database.query(
      `SELECT * FROM ${this.table} WHERE parent_id = ?`,
      [parentId]
    );
    return rows;
  }

  async getId(id) {
    const [rows] = await this.database.query(
      `SELECT id FROM ${this.table} WHERE id = ?`,
      [id]
    );
    return rows;
  }

  async getPriceById(id) {
    const [rows] = await this.database.query(
      `SELECT prices FROM ${this.table} WHERE id = ?`,
      [id]
    );
    return rows;
  }

  // The U of CRUD - Update operation
  async updateAll({
    status,
    rejectionReason,
    reservationDateStart,
    reservationDateEnd,
    startTime,
    endTime,
    createdDate,
    prices,
    id,
  }) {
    const [rows] = await this.database.query(
      ` UPDATE ${this.table} SET status = ?, rejection_reason = ?, reservation_date_start = ?, reservation_date_end = ?, start_time = ?, end_time = ?, created_date = ?, prices = ? WHERE id = ?`,
      [
        status,
        rejectionReason,
        reservationDateStart,
        reservationDateEnd,
        startTime,
        endTime,
        createdDate,
        prices,
        id,
      ]
    );
    return [rows];
  }

  async update({ status, id }) {
    const [rows] = await this.database.query(
      ` UPDATE ${this.table} SET status = ? WHERE id = ?`,
      [status, id]
    );
    return [rows];
  }

  async updatePrices(id, prices) {
    const [rows] = await this.database.query(
      `UPDATE ${this.table} SET prices = ? WHERE id = ?`,
      [prices, id]
    );
    return rows;
  }

  // The D of CRUD - Delete operation
  async delete(id) {
    const [rows] = await this.database.query(
      `DELETE FROM ${this.table} where id = ?`,
      [id]
    );
    return [rows];
  }
}

module.exports = ReservationManager;
