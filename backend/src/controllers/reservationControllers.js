const tables = require("../tables");
const ReservationManager = require("../models/ReservationManager");

const reservationManager = new ReservationManager();

// B
const browse = async (req, res, next) => {
  try {
    const reservation = await tables.reservation.readAll();
    res.json(reservation);
  } catch (err) {
    next(err);
  }
};

// R
const read = async (req, res, next) => {
  try {
    const reservation = await tables.reservation.read(req.params.id);
    if (reservation == null) {
      res.sendStatus(404);
    } else {
      res.json(reservation);
    }
  } catch (err) {
    next(err);
  }
};

const readForCalendar = async (req, res, next) => {
  try {
    const reservation = await tables.reservation.readForCalendar(req.params.id);
    if (reservation == null) {
      res.sendStatus(404);
    } else {
      res.json(reservation);
    }
  } catch (err) {
    next(err);
  }
};

const readForListRequests = async (req, res, next) => {
  try {
    const reservation = await tables.reservation.readForListRequests(
      req.params.id
    );
    if (reservation == null) {
      res.sendStatus(404);
    } else {
      res.json(reservation);
    }
  } catch (err) {
    next(err);
  }
};

const getReservationByParentId = async (req, res) => {
  const { parentId } = req.query;
  try {
    const reservations = await reservationManager.getReservationByParentId(
      parentId
    );
    if (reservations.length === 0) {
      return res
        .status(404)
        .json({ message: "No reservations found for this parent" });
    }
    return res.json(reservations);
  } catch (error) {
    console.error("Error fetching reservation by parent ID", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

const getReservationPrice = async (req, res) => {
  const { id } = req.params;
  try {
    const reservation = await reservationManager.getPriceById(id);
    if (!reservation || reservation.length === 0) {
      return res.status(404).json({ message: "Reservation not found" });
    }
    const price = reservation[0].prices;
    return res.json({ price });
  } catch (error) {
    console.error("Error fetching reservation price:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

const getId = async (req, res, next) => {
  try {
    const reservation = await tables.reservation.getId(req.params.id);
    if (reservation == null) {
      res.sendStatus(404);
    } else {
      res.json({ id: reservation.id });
    }
  } catch (err) {
    next(err);
  }
};

const getReservationDetailsById = async (req, res) => {
  const { id } = req.params;
  try {
    const reservationDetails =
      await reservationManager.getReservationDetailsById(id);
    if (!reservationDetails) {
      return res.status(404).json({ message: "Reservation details not found" });
    }
    return res.json(reservationDetails);
  } catch (error) {
    console.error("Error fetching reservation details:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

const getParentId = async (req, res) => {
  const { id } = req.params;
  try {
    const parentId = await reservationManager.getParentIdByReservationId(id);
    if (!parentId) {
      return res.status(404).json({ message: "Parent ID not found." });
    }
    return res.json({ parentId });
  } catch (error) {
    console.error("Error fetching parent ID:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

const getReservationStatus = async (req, res) => {
  const { id } = req.params;
  try {
    const status = await reservationManager.getReservationIdStatus(id);
    if (status === null) {
      return res.status(404).json({ message: "Reservation not found" });
    }
    return res.json({ status });
  } catch (error) {
    console.error("Error fetching reservation status:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

// E
const edit = async (req, res, next) => {
  try {
    const { id } = req.params;
    const reservation = req.body;
    const [result] = await tables.reservation.update({ id, ...reservation });
    if (result.affectedRows === 0) {
      res.sendStatus(404);
    } else {
      res.sendStatus(204);
    }
  } catch (err) {
    res.sendStatus(500);
    next(err);
  }
};

const updatePrices = async (req, res) => {
  const { id } = req.params;
  const { prices } = req.body;
  try {
    const result = await reservationManager.updatePrices(id, prices);
    if (result.affectedRows === 0) {
      return res.status(404).send("Reservation not found");
    }
    return res.status(200).json({ message: "Price updated successfully" });
  } catch (error) {
    console.error("Error updating price", error);
    return res.status(500).json({ message: "Error updating price" });
  }
};

const updateReservationAndParentDetails = async (req, res) => {
  const { id } = req.params;
  const { childId, parentUpdateInfo } = req.body;

  try {
    await reservationManager.updateReservationAndParentDetails(
      id,
      childId,
      parentUpdateInfo
    );
    res
      .status(200)
      .json({ message: "Reservation and parent details updated successfully" });
  } catch (error) {
    console.error("Error updating reservation and parent details:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const updateReservationStatus = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  try {
    const [result] = await reservationManager.updateStatusId({ status, id });
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Reservation not found" });
    }
    return res
      .status(200)
      .json({ message: "Reservation status updated successfully" });
  } catch (error) {
    console.error("Error updating reservation status:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

// A
const add = async (req, res, next) => {
  const reservation = req.body;
  try {
    const insertId = await tables.reservation.create(reservation);
    res.status(201).json({ insertId });
  } catch (err) {
    res.status(500).json({ message: "Can't add any reservation" });
    next(err);
  }
};

// D
const destroy = async (req, res, next) => {
  const { id } = req.params;
  try {
    const [result] = await tables.reservation.delete(id);

    if (result.affectedRows === 0) {
      res.sendStatus(404);
    } else {
      res.sendStatus(204);
    }
  } catch (err) {
    res.status(500).json({ message: "Couldn't delete" });
    next(err);
  }
};

module.exports = {
  browse,
  read,
  edit,
  add,
  destroy,
  readForCalendar,
  readForListRequests,
  getReservationByParentId,
  getReservationPrice,
  getId,
  getReservationDetailsById,
  getParentId,
  getReservationStatus,
  updatePrices,
  updateReservationAndParentDetails,
  updateReservationStatus,
};
