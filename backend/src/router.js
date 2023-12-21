const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import itemControllers module for handling item-related operations

const employeesControllers = require("./controllers/employeesControllers");

// Route for employees
router.get("/employees", employeesControllers.browse);
router.get("/employees/:id", employeesControllers.read);
router.put("/employees/:id", employeesControllers.edit);
router.post("/employees", employeesControllers.add);
router.delete("/employees/:id", employeesControllers.destroy);

// Route for documents
/* ************************************************************************* */

module.exports = router;
