const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import itemControllers module for handling item-related operations
const structuresControllers = require("./controllers/stucturesControllers");

router.get("/structures", structuresControllers.browse);
router.get("/structures/:id", structuresControllers.read);
router.post("/structures", structuresControllers.add);
router.put("/structures/:id", structuresControllers.edit);
router.delete("/structures/:id", structuresControllers.destroy);

/* ************************************************************************* */

module.exports = router;
