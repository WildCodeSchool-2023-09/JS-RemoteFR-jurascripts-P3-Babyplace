const argon2 = require("argon2");
const jwt = require("jsonwebtoken");

// Import access to database tables
const tables = require("../tables");

const login = async (req, res, next) => {
  try {
    // Fetch a specific user from the database based on the provided email
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
      // Respond with the user and a signed token in JSON format (but without the hashed password)
      delete user.hashed_password;

      const token = await jwt.sign({ sub: user.id }, process.env.APP_SECRET, {
        expiresIn: "1h",
      });

      res.json({
        token,
        user,
      });
    } else {
      res.sendStatus(422);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

const logout = async (req, res, next) => {
  try {
    localStorage.removeItem("structureToken");
    localStorage.removeItem("parentToken");
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
