const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import userControllers module for handling user-related operations
const usersControllers = require("./controllers/usersControllers");
const assignmentsControllers = require("./controllers/assignmentsControllers");
const disponibilitiesControllers = require("./controllers/disponibilitiesControllers");

// Route to get a list of users
router.get("/users", usersControllers.browse);
router.get("/assignments", assignmentsControllers.browse);
router.get("/disponibilities", disponibilitiesControllers.browse);

// Route to get a specific user by ID
router.get("/users/:id", usersControllers.read);
router.get("/assignments/:id", assignmentsControllers.read);
router.get("/disponibilities/:id", disponibilitiesControllers.read);

// Route to add a new user
router.post("/users", usersControllers.add);
router.post("/assignments", assignmentsControllers.add);
router.post("/disponibilities", disponibilitiesControllers.add);

// Route to edit a user
router.put("/users/:id", usersControllers.edit);
router.put("/assignments/:id", assignmentsControllers.edit);
router.put("/disponibilities/:id", disponibilitiesControllers.edit);

// Route to destroy user
router.delete("/users/:id", usersControllers.destroy);
router.delete("/assignments/:id", assignmentsControllers.destroy);
router.delete("/disponibilities/:id", disponibilitiesControllers.destroy);

/* ************************************************************************* */

module.exports = router;
