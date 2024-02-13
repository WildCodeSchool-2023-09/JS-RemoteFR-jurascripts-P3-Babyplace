const argon2 = require("argon2");
const jwt = require("jsonwebtoken");

const tables = require("../tables");
const ParentsManager = require("../models/ParentsManager");
const StructureManager = require("../models/StructureManager");

const parentsManager = new ParentsManager();
const structureManager = new StructureManager();

const login = async (req, res, next) => {
  try {
    const user = await tables.users.readByEmailWithPassword(req.body.email);
    if (user == null) {
      res.sendStatus(422);
      return;
    }
    const verified = await argon2.verify(
      user.hashed_password,
      req.body.password
    );
    if (verified) {
      delete user.hashed_password;
      const token = await jwt.sign({ sub: user.id }, process.env.APP_SECRET, {
        expiresIn: "1h",
      });
      const parent = await parentsManager.readByUserId(user.id);
      const structure = await structureManager.readByUserId(user.id);

      if (
        (parent && req.body.profile !== "Parent") ||
        (structure && req.body.profile !== "Structure")
      ) {
        res.sendStatus(422);
        return;
      }

      res.json({
        token,
        user,
        parent,
        structure,
      });
    } else {
      res.sendStatus(422);
    }
  } catch (err) {
    next(err);
  }
};

const logout = async (req, res, next) => {
  try {
    localStorage.removeItem("structureToken");
    localStorage.removeItem("parentToken");
    localStorage.removeItem("user");
    localStorage.removeItem("parent");
    localStorage.removeItem("parentId");

    res.status(200).json({ message: "Déconnexion réussie" });
  } catch (error) {
    console.error("Erreur lors de la déconnexion :", error);
    res.status(500).json({ message: "Erreur lors de la déconnexion" });
  }
  next();
};

module.exports = {
  login,
  logout,
};
