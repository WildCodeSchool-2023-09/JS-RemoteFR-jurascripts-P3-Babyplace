const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import Controllers module for handling all-related operations
const childControllers = require("./controllers/childControllers");

// child
router.get("/child", childControllers.browse);
router.get("/child/:id", childControllers.read);
router.put("/child/:id", childControllers.edit);
router.post("/child", childControllers.add);
router.delete("/child/:id", childControllers.destroy);

/* ************************************************************************* */

module.exports = router;
