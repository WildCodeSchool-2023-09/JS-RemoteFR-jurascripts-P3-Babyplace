// Import access to database tables
const tables = require("../tables");

// The B of BREAD - Browse (Read All) operation
const browse = async (req, res, next) => {
  try {
    // Fetch all reservation from the database
    const reservation = await tables.reservation.readAll();

    // Respond with the reservation in JSON format
    res.json(reservation);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The R of BREAD - Read operation
const read = async (req, res, next) => {
  try {
    // Fetch a specific item from the database based on the provided ID
    const reservation = await tables.reservation.read(req.params.id);

    // If the item is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the item in JSON format
    if (reservation == null) {
      res.sendStatus(404);
    } else {
      res.json(reservation);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

const readForCalendar = async (req, res, next) => {
  try {
    // Fetch a specific item from the database based on the provided ID
    const reservation = await tables.reservation.readForCalendar(req.params.id);

    // If the item is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the item in JSON format
    if (reservation == null) {
      res.sendStatus(404);
    } else {
      res.json(reservation);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};
const readForListRequests = async (req, res, next) => {
  try {
    // Fetch a specific item from the database based on the provided ID
    const reservation = await tables.reservation.readForListRequests(
      req.params.id
    );

    // If the item is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the item in JSON format
    if (reservation == null) {
      res.sendStatus(404);
    } else {
      res.json(reservation);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The E of BREAD - Edit (Update) operation
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

// The A of BREAD - Add (Create) operation
const add = async (req, res, next) => {
  // Extract the item data from the request body
  const reservation = req.body;
  try {
    // Insert the reservation into the database
    const insertId = await tables.reservation.create(reservation);

    // Respond with HTTP 201 (Created) and the ID of the newly inserted item
    res.status(201).json({ insertId });
  } catch (err) {
    res.status(500).json({ message: "Can't add any reservation" });
    next(err);
  }
};

// The D of BREAD - Destroy (Delete) operation
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

// Ready to export the controller function
module.exports = {
  browse,
  read,
  readForCalendar,
  readForListRequests,
  edit,
  add,
  destroy,
};
