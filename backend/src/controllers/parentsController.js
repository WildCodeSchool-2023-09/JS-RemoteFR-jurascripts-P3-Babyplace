// Import access to database tables
const tables = require("../tables");

// The B of BREAD - Browse (Read All) operation
const browse = async (req, res, next) => {
  try {
    // Fetch all parents from the database
    const parents = await tables.parents.readAll();

    // Respond with the parents in JSON format
    res.json(parents);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The R of BREAD - Read operation
const read = async (req, res, next) => {
  try {
    // Fetch a specific parents from the database based on the provided ID
    const parents = await tables.parents.read(req.params.id);

    // If the parents is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the parents in JSON format
    if (parents == null) {
      res.sendStatus(404);
    } else {
      res.json(parents);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The E of BREAD - Edit (Update) operation
// This operation is not yet implemented

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

// The A of BREAD - Add (Create) operation
const add = async (req, res, next) => {
  // Extract the parents data from the request body
  const parents = req.body;

  try {
    // Insert the parents into the database
    const insertId = await tables.parents.create(parents);

    // Respond with HTTP 201 (Created) and the ID of the newly inserted parents
    res.status(201).json({ insertId });
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

const addForReservation = async (req, res, next) => {
  // Extract the parents data from the request body
  const parents = req.body;

  try {
    // Insert the parents into the database
    const insertId = await tables.parents.createForReservation(parents);

    // Respond with HTTP 201 (Created) and the ID of the newly inserted parents
    res.status(201).json({ insertId });
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The D of BREAD - Destroy (Delete) operation
// This operation is not yet implemented
const destroy = async (req, res, next) => {
  try {
    // Fetch a specific parents from the database based on the provided ID
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
// Ready to export the controller functions
module.exports = {
  browse,
  read,
  edit,
  add,
  addForReservation,
  destroy,
};
