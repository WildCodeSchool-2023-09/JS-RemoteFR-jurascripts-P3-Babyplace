const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import Controllers module for handling all-related operations
const usersControllers = require("./controllers/usersControllers");
const assignmentsControllers = require("./controllers/assignmentsControllers");
const disponibilitiesControllers = require("./controllers/disponibilitiesControllers");
const childControllers = require("./controllers/childControllers");
const parentsControllers = require("./controllers/parentsController");
const structuresControllers = require("./controllers/stucturesControllers");

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

// child
router.get("/child", childControllers.browse);
router.get("/child/:id", childControllers.read);
router.put("/child/:id", childControllers.edit);
router.post("/child", childControllers.add);
router.delete("/child/:id", childControllers.destroy);

// parents

router.get("/parents", parentsControllers.browse);
router.get("/parents/:id", parentsControllers.read);
router.put("/parents/:id", parentsControllers.edit);
router.post("/parents", parentsControllers.add);
router.delete("/parents/:id", parentsControllers.destroy);

// structures

router.get("/structures", structuresControllers.browse);
router.get("/structures/:id", structuresControllers.read);
router.post("/structures", structuresControllers.add);
router.put("/structures/:id", structuresControllers.edit);
router.delete("/structures/:id", structuresControllers.destroy);

/* ************************************************************************* */

module.exports = router;
