const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import auth services for security operations
const { hashPassword, verifyToken } = require("./services/auth");

// Import Controllers module for handling all-related operations
const usersControllers = require("./controllers/usersControllers");
const assignmentsControllers = require("./controllers/assignmentsControllers");
const disponibilitiesControllers = require("./controllers/disponibilitiesControllers");
const childControllers = require("./controllers/childControllers");
const parentsControllers = require("./controllers/parentsController");
const structuresControllers = require("./controllers/stucturesControllers");
const reservationControllers = require("./controllers/reservationControllers");
const documentsControllers = require("./controllers/documentsController");
const employeesControllers = require("./controllers/employeesControllers");

// auth
// Import authControllers module for handling auth-related operations
const authControllers = require("./controllers/authControllers");

router.post("/users/login", authControllers.login);
// router.post("/users/logout", authControllers.logout);

// users
router.get("/users", usersControllers.browse);
router.get("/users/:id", usersControllers.read);
router.put("/users/:id", usersControllers.edit);
router.post("/users", hashPassword, usersControllers.add);
router.delete("/users/:id", usersControllers.destroy);

// assignments
router.get("/assignments", assignmentsControllers.browse);
router.get("/assignments/:id", assignmentsControllers.read);
router.put("/assignments/:id", assignmentsControllers.edit);
router.post("/assignments", assignmentsControllers.addOne);
router.delete("/assignments/:id", assignmentsControllers.destroy);

// disponibilites
router.get("/disponibilities", disponibilitiesControllers.browse);
router.get("/disponibilities/:id", disponibilitiesControllers.read);
router.put("/disponibilities/:id", disponibilitiesControllers.edit);
router.post("/disponibilities", disponibilitiesControllers.add);
router.delete("/disponibilities/:id", disponibilitiesControllers.destroy);
router.get(
  "/available-employees",
  disponibilitiesControllers.getAvailableEmployees
);
router.put(
  "/disponibilities/:id/decrement",
  disponibilitiesControllers.decrementPlaces
);

// child
router.get("/child", childControllers.browse);
router.get("/child/:id", childControllers.read);
router.put("/child/:id", childControllers.edit);
router.post("/child", childControllers.add);
router.delete("/child/:id", childControllers.destroy);

// parents
router.get("/parents", parentsControllers.browse);
router.get("/parents/:user_id", parentsControllers.read);
router.put("/parents/:id", parentsControllers.edit);
router.post("/parents", parentsControllers.add);
router.post("/parent", parentsControllers.addForReservation);
router.delete("/parents/:id", parentsControllers.destroy);

// structures
router.get("/structures", structuresControllers.browse);
router.get("/structures/:id", structuresControllers.read);
router.put("/structures/:id", structuresControllers.edit);
router.post("/structures", verifyToken, structuresControllers.add);
router.delete("/structures/:id", structuresControllers.destroy);

// reservation
router.get("/reservation", reservationControllers.browse);
router.get("/reservation", reservationControllers.getReservationByParentId);
router.get("/reservation/:id", reservationControllers.read);
router.get("/reservation/:id", reservationControllers.getId);
router.get(
  "/reservation/:id/prices",
  reservationControllers.getReservationPrice
);
router.get("/calendar", reservationControllers.readForCalendar);
router.get("/listofrequests", reservationControllers.readForListRequests);
router.put("/reservation/:id", reservationControllers.edit);
router.put("/reservation/:id/prices", reservationControllers.updatePrices);
router.post("/reservation", reservationControllers.add);
router.delete("/reservation/:id", reservationControllers.destroy);

// documents
router.get("/documents", documentsControllers.browse);
router.get("/documents/:id", documentsControllers.read);
router.post("/documents", documentsControllers.add);
router.put("/documents/:id", documentsControllers.edit);
router.delete("/documents/:id", documentsControllers.destroy);

// Route for employees
router.get("/employees", employeesControllers.browse);
router.get("/employees/:id", employeesControllers.read);
router.put("/employees/:id", employeesControllers.edit);
router.post("/employees", employeesControllers.add);
router.delete("/employees/:id", employeesControllers.destroy);

/* ************************************************************************* */

module.exports = router;
