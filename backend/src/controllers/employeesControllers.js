// Import access to database tables
const tables = require("../tables");

// The B of BREAD - Browse (Read All) operation
const browse = async (req, res, next) => {
  try {
    const employee = await tables.employees.readAll();

    res.json(employee);
  } catch (err) {
    next(err);
  }
};

// The Read of BREAD
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

// The E of BREAD - Edit (Update) operation
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

// The A of BREAD - Add
const add = async (req, res, next) => {
  // Extract the item data from the request body
  const employees = req.body;

  try {
    // Insert the item into the database
    const insertId = await tables.employees.create(employees);

    // Respond with HTTP 201 (Created) and the ID of the newly inserted item
    res.status(201).json({ insertId });
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// Delete = Destroy

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

// Ready to export the controller functions
module.exports = {
  browse,
  read,
  edit,
  add,
  destroy,
};
