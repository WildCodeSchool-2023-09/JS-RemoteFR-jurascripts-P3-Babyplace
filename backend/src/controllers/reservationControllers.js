// Import access to database tables
const tables = require("../tables");

// The B of BREAD - Browse (Read All) operation
const browse = async (req, res, next) => {
  try {
    // Fetch all reservation from the database
    const reservation = await tables.reservations.readAll();

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
    // Fetch a specific reservation from the database based on the provided ID
    const reservation = await tables.reservation.read(req.params.id);

    // If the reservation is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the reservation in JSON format
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
// This operation is not yet implemented
const edit = async (req, res, next) => {
  const { id } = req.params;
  const firstName = req.body.first_name;
  const lastName = req.body.last_name;
  const dateOfBirth = req.body.date_of_birth;
  const { walker } = req.body;
  const { allergies } = req.body;
  const { alimentation } = req.body;
  try {
    const reservationResult = await tables.reservation.update(
      id,
      firstName,
      lastName,
      dateOfBirth,
      walker,
      allergies,
      alimentation
    );

    if (reservationResult.affectedRows === 0) {
      res.sendStatus(404);
    } else {
      res.sendStatus(204);
    }
  } catch (err) {
    next(err);
  }
};

// The A of BREAD - Add (Create) operation
const add = async (req, res, next) => {
  // Extract the reservation data from the request body
  const reservation = req.body;

  try {
    // Insert the reservation into the database
    const insertId = await tables.reservation.create(reservation);

    // Respond with HTTP 201 (Created) and the ID of the newly inserted reservation
    res.status(201).json({ insertId });
  } catch (err) {
    res.status(500).json({ message: "Error with server" });
    next(err);
  }
};

// The D of BREAD - Destroy (Delete) operation
// This operation is not yet implemented
const destroy = async (req, res, next) => {
  try {
    const [result] = await tables.reservation.delete(req.params.id);

    if (result.affectedRows) {
      res.sendStatus(204);
    } else {
      res.sendStatus(404);
    }
  } catch (err) {
    res.status(500).json({ message: "Error with server" });
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
};
