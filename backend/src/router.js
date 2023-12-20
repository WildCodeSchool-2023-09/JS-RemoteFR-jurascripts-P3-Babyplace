const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import Controllers module for handling all-related operations
const childControllers = require("./controllers/childControllers");
const parentsControllers = require("./controllers/parentsController");
const structuresControllers = require("./controllers/stucturesControllers");

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
