const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import itemControllers module for handling item-related operations


const parentsControllers = require("./controllers/parentsController");
const structuresControllers = require("./controllers/stucturesControllers");


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
