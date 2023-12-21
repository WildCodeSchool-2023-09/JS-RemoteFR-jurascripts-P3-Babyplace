const tables = require("../tables");

// B

const browse = async (req, res, next) => {
  try {
    const assignements = await tables.employees_assignments.readAll();
    res.json(assignements);
  } catch (err) {
    next(err);
  }
};

// R
const read = async (req, res, next) => {
  try {
    const assignement = await tables.employees_assignments.read(req.params.id);
    if (assignement == null) {
      res.sendStatus(404);
    } else {
      res.json(assignement);
    }
  } catch (err) {
    next(err);
  }
};

// E
const edit = async (req, res, next) => {
  try {
    const { id } = req.params;
    const assignement = req.body;
    const [result] = await tables.employees_assignments.update({
      id,
      ...assignement,
    });

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
  const assignement = req.body;
  try {
    const insertId = await tables.employees_assignments.create(assignement);
    res.status(201).json({ insertId });
  } catch (err) {
    next(err);
  }
};

// D
const destroy = async (req, res, next) => {
  try {
    const [result] = await tables.employees_assignments.delete(req.params.id);
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
};
