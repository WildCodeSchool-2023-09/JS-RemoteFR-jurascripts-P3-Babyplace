/* eslint-disable consistent-return */
const tables = require("../tables");

const ReservationManager = require("../models/ReservationManager");

const reservationManager = new ReservationManager();

// B
const browse = async (req, res, next) => {
  try {
    const child = await tables.child.readAll();
    res.json(child);
  } catch (err) {
    next(err);
  }
};

// R
const read = async (req, res, next) => {
  try {
    const child = await tables.child.read(req.params.id);
    if (child == null) {
      res.sendStatus(404);
    } else {
      res.json(child);
    }
  } catch (err) {
    next(err);
  }
};

const readByParentId = async (req, res, next) => {
  try {
    const child = await tables.child.readByParentId(req.params.id);
    if (child == null) {
      res.sendStatus(404);
    } else {
      res.json(child);
    }
  } catch (err) {
    next(err);
  }
};

const readChildReservation = async (req, res, next) => {
  try {
    const { id } = req.params;
    const child = await reservationManager.readChildReservation(id);
    if (child) {
      res.json(child);
    } else {
      res.status(404).json({ message: "No child found for this reservation." });
    }
  } catch (err) {
    console.error("Error fetching child reservation details:", err);
    res.status(500).json({ message: "Server error" });
    next(err);
  }
};

// E
const edit = async (req, res, next) => {
  try {
    const child = req.body;
    const { id } = req.params;
    const [result] = await tables.child.update({ ...child, id });
    if (result.affectedRows === 0) {
      res.sendStatus(404);
    } else {
      res.sendStatus(204);
    }
    next();
  } catch (err) {
    console.error(err);
    res.status(500);
    next(err);
  }
};

const updateChildInfo = async (req, res) => {
  const { id } = req.params;
  const childInfo = req.body;
  try {
    await reservationManager.updateChildInfo(id, childInfo);
    res.status(200).json({
      message: "Child information updated successfully for reservation.",
    });
  } catch (error) {
    console.error("Error updating child information:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// A
const add = async (req, res, next) => {
  const { reservationId, ...childData } = req.body;
  try {
    const parentId = await reservationManager.getParentIdByReservationId(
      reservationId
    );
    if (!parentId) {
      return res
        .status(404)
        .json({ message: "Parent ID not found for the given reservation ID." });
    }
    const insertId = await tables.child.create({ ...childData, parentId });

    res.status(201).json({ insertId });
  } catch (err) {
    console.error("Error adding child:", err);
    res.status(500).json({ message: "Could not add the child" });
    next(err);
  }
};

// D
const destroy = async (req, res, next) => {
  try {
    const [result] = await tables.child.delete(req.params.id);

    if (result.affectedRows) {
      res.sendStatus(204);
    } else {
      res.sendStatus(404);
    }
  } catch (err) {
    res.status(500).json({ message: "Couldn't delete" });
    next();
  }
};

module.exports = {
  browse,
  read,
  edit,
  add,
  destroy,
  readByParentId,
  readChildReservation,
  updateChildInfo,
};
