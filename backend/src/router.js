const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import itemControllers module for handling item-related operations

const parentsControllers = require("./controllers/parentsController");

// parents

router.get("/parents", parentsControllers.browse);
router.get("/parents/:id", parentsControllers.read);
router.put("/parents/:id", parentsControllers.edit);
router.post("/parents", parentsControllers.add);
router.delete("/parents/:id", parentsControllers.destroy);

/* ************************************************************************* */

module.exports = router;
