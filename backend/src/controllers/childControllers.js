// Import access to database tables
const tables = require("../tables");

// The B of BREAD - Browse (Read All) operation
const browse = async (req, res, next) => {
  try {
    // Fetch all child from the database
    const child = await tables.child.readAll();

    // Respond with the child in JSON format
    res.json(child);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The R of BREAD - Read operation
const read = async (req, res, next) => {
  try {
    // Fetch a specific child from the database based on the provided ID
    const child = await tables.child.read(req.params.id);

    // If the child is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the child in JSON format
    if (child == null) {
      res.sendStatus(404);
    } else {
      res.json(child);
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
    const childResult = await tables.child.update(
      id,
      firstName,
      lastName,
      dateOfBirth,
      walker,
      allergies,
      alimentation
    );

    if (childResult.affectedRows === 0) {
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
  // Extract the child data from the request body
  const child = req.body;

  try {
    // Insert the child into the database
    const insertId = await tables.child.create(child);

    // Respond with HTTP 201 (Created) and the ID of the newly inserted child
    res.status(201).json({ insertId });
  } catch (err) {
    res.status(500).json({ message: "hello fredo" });
    next(err);
  }
};

// The D of BREAD - Destroy (Delete) operation
// This operation is not yet implemented
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
};
