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

  async getReservationDetailsById(reservationId) {
    const [checkRows] = await this.database.query(
      `
    SELECT child_id
    FROM reservation
    WHERE id = ?;
  `,
      [reservationId]
    );

    if (checkRows[0] && checkRows[0].child_id) {
      const [rows] = await this.database.query(
        `
      SELECT
        parents.last_name,
        parents.first_name AS parent_first_name,
        parents.email,
        parents.address,
        parents.phone_number,
        child.first_name AS child_first_name
      FROM parents
      INNER JOIN child ON parents.id = child.parent_id
      INNER JOIN reservation ON child.id = reservation.child_id
      WHERE reservation.id = ?;
    `,
        [reservationId]
      );
      return rows[0];
    }

    const [rows] = await this.database.query(
      `
      SELECT
        parents.last_name,
        parents.first_name AS parent_first_name,
        parents.email,
        parents.address,
        parents.phone_number
      FROM parents
      INNER JOIN reservation ON parents.id = reservation.parent_id
      WHERE reservation.id = ?;
    `,
      [reservationId]
    );
    return rows[0];
  }

  async getParentIdByReservationId(reservationId) {
    const [rows] = await this.database.query(
      `SELECT parent_id FROM ${this.table} WHERE id = ?`,
      [reservationId]
    );
    return rows.length > 0 ? rows[0].parent_id : null;
  }

  async getReservationIdStatus(reservationId) {
    const [rows] = await this.database.query(
      `SELECT status FROM ${this.table} WHERE id = ?`,
      [reservationId]
    );
    return rows.length > 0 ? rows[0].status : null;
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

  async updateReservationAndParentDetails(
    reservationId,
    childId,
    parentUpdateInfo
  ) {
    const connection = await this.database.getConnection();

    try {
      await connection.beginTransaction();

      await connection.query(
        `UPDATE ${this.table} SET child_id = ? WHERE id = ?`,
        [childId, reservationId]
      );

      await connection.query(
        `UPDATE parents SET last_name = ?, first_name = ?, email = ?, address = ?, phone_number = ? WHERE id = (SELECT parent_id FROM ${this.table} WHERE id = ?)`,
        [
          parentUpdateInfo.lastName,
          parentUpdateInfo.firstName,
          parentUpdateInfo.email,
          parentUpdateInfo.address,
          parentUpdateInfo.phoneNumber,
          reservationId,
        ]
      );

      await connection.commit();
    } catch (error) {
      await connection.rollback();
      throw error;
    } finally {
      connection.release();
    }
  }

  async updateStatusId({ status, id }) {
    const [rows] = await this.database.query(
      ` UPDATE ${this.table} SET status = ? WHERE id = ?`,
      [status, id]
    );
    return [rows];
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
