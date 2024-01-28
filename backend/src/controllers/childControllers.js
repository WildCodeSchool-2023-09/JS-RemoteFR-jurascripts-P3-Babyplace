/* eslint-disable consistent-return */
// Import access to database tables
const tables = require("../tables");

const ReservationManager = require("../models/ReservationManager");

const reservationManager = new ReservationManager();

// The B of BREAD - Browse (Read All) operation
const browse = async (req, res, next) => {
  try {
    const child = await tables.child.readAll();
    res.json(child);
  } catch (err) {
    next(err);
  }
};

// The R of BREAD - Read operation
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

// The E of BREAD - Edit (Update) operation
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

// The A of BREAD - Add (Create) operation
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

// The D of BREAD - Destroy (Delete) operation
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

// Ready to export the controller functions
module.exports = {
  browse,
  read,
  edit,
  add,
  destroy,
  readByParentId,
};
