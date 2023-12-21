const tables = require("../tables");

// B

const browse = async (req, res, next) => {
  try {
    const disponibilities = await tables.employees_disponibilities.readAll();
    res.json(disponibilities);
  } catch (err) {
    next(err);
  }
};

// R
const read = async (req, res, next) => {
  try {
    const disponibility = await tables.employees_disponibilities.read(
      req.params.id
    );
    if (disponibility == null) {
      res.sendStatus(404);
    } else {
      res.json(disponibility);
    }
  } catch (err) {
    next(err);
  }
};

// E
const edit = async (req, res, next) => {
  try {
    const { id } = req.params;
    const disponibility = req.body;
    const [result] = await tables.employees_disponibilities.update({
      id,
      ...disponibility,
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
  const disponibility = req.body;
  try {
    const insertId = await tables.employees_disponibilities.create(
      disponibility
    );
    res.status(201).json({ insertId });
  } catch (err) {
    next(err);
  }
};

// D
const destroy = async (req, res, next) => {
  try {
    const [result] = await tables.employees_disponibilities.delete(
      req.params.id
    );
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
