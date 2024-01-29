const tables = require("../tables");

// B
const browse = async (req, res, next) => {
  try {
    const parents = await tables.parents.readAll();
    res.json(parents);
  } catch (err) {
    next(err);
  }
};

// R
const read = async (req, res, next) => {
  try {
    const parents = await tables.parents.read(req.params.user_id);
    if (parents == null) {
      res.sendStatus(404);
    } else {
      res.json(parents);
    }
  } catch (err) {
    next(err);
  }
};

// E
const edit = async (req, res, next) => {
  try {
    const parents = req.body;
    const { id } = req.params;
    const [result] = await tables.parents.update({ ...parents, id });
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

// A
const add = async (req, res, next) => {
  const parents = req.body;
  try {
    const insertId = await tables.parents.create(parents);
    res.status(201).json({ insertId });
  } catch (err) {
    next(err);
  }
};

const addForReservation = async (req, res, next) => {
  const parents = req.body;
  try {
    const insertId = await tables.parents.createForReservation(parents);
    res.status(201).json({ insertId });
  } catch (err) {
    next(err);
  }
};

// D
const destroy = async (req, res, next) => {
  try {
    const [parents] = await tables.parents.delete(req.params.id);
    if (parents.affectedRows === 0) {
      res.sendStatus(404);
    } else {
      res.sendStatus(204);
    }
  } catch (err) {
    res.status(500).json({ message: "Error with server" });
    next(err);
  }
};

module.exports = {
  browse,
  read,
  edit,
  add,
  destroy,
  addForReservation,
};
