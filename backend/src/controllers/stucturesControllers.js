const tables = require("../tables");

// B
const browse = async (req, res, next) => {
  try {
    const structure = await tables.structures.readAll();
    res.json(structure);
  } catch (err) {
    next(err);
  }
};

// R
const read = async (req, res, next) => {
  try {
    const structure = await tables.structures.read(req.params.id);
    if (structure == null) {
      res.sendStatus(404);
    } else {
      res.json(structure);
    }
  } catch (err) {
    next(err);
  }
};

const readByUserId = async (req, res) => {
  const structure = await tables.structures.readByUserId(req.params.user_id);
  res.json(structure);
};

// E
const edit = async (req, res, next) => {
  try {
    const { id } = req.params;
    const structure = req.body;
    const [result] = await tables.structures.update({ id, ...structure });
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

// A
const add = async (req, res, next) => {
  const structure = req.body;
  try {
    const insertId = await tables.structures.create(structure);
    res.status(201).json({ insertId });
  } catch (err) {
    next(err);
  }
};

// D
const destroy = async (req, res, next) => {
  const { id } = req.params;
  try {
    const [result] = await tables.structures.delete(id);
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

module.exports = {
  browse,
  read,
  edit,
  add,
  destroy,
  readByUserId,
};
