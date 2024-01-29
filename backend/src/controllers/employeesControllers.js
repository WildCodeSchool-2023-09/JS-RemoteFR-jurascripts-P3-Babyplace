const tables = require("../tables");

// B
const browse = async (req, res, next) => {
  try {
    const employee = await tables.employees.readAll();

    res.json(employee);
  } catch (err) {
    next(err);
  }
};

// R
const read = async (req, res, next) => {
  try {
    const emp = await tables.employees.read(req.params.id);

    if (emp == null) {
      res.sendStatus(404);
    } else {
      res.json(emp);
    }
  } catch (err) {
    next(err);
  }
};

// E
const edit = async (req, res, next) => {
  try {
    const { id } = req.params;
    const emply = req.body;
    const [result] = await tables.employees.update({ ...emply, id });

    if (result.affectedRows === 0) {
      res.sendStatus(404);
    } else {
      res.sendStatus(204);
    }
  } catch (err) {
    res.status(500);
    next(err);
  }
};

// A
const add = async (req, res, next) => {
  const employees = req.body;
  try {
    const insertId = await tables.employees.create(employees);
    res.status(201).json({ insertId });
  } catch (err) {
    next(err);
  }
};

// D
const destroy = (req, res, next) => {
  tables.employees
    .delete(req.params.id)
    .then(([result]) => {
      if (result.rows === 0) {
        res.sendStatus(404);
      } else {
        res.sendStatus(204);
      }
    })
    .catch((err) => {
      next(err);
      res.sendStatus(500);
    });
};

module.exports = {
  browse,
  read,
  edit,
  add,
  destroy,
};
