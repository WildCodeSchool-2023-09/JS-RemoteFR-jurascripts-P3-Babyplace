const tables = require("../tables");

// B
const browse = async (req, res, next) => {
  try {
    const document = await tables.documents.readAll();

    res.json(document);
  } catch (err) {
    next(err);
  }
};

// R
const read = async (req, res, next) => {
  try {
    const document = await tables.documents.read(req.params.id);

    if (document == null) {
      res.sendStatus(404);
    } else {
      res.json(document);
    }
  } catch (err) {
    next(err);
  }
};

// E
const edit = async (req, res, next) => {
  try {
    const { id } = req.params;
    const document = req.body;
    const [result] = await tables.documents.update({ id, ...document });

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
  const document = req.body;
  try {
    const insertId = await tables.documents.create(document);

    res.status(201).json({ insertId });
  } catch (err) {
    next(err);
  }
};

// D
const destroy = async (req, res, next) => {
  const { id } = req.params;
  try {
    const [result] = await tables.documents.delete(id);

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
};
