const express = require("express");

const router = express.Router();

const { hashPassword } = require("./services/auth");

const usersControllers = require("./controllers/usersControllers");
const assignmentsControllers = require("./controllers/assignmentsControllers");
const disponibilitiesControllers = require("./controllers/disponibilitiesControllers");
const childControllers = require("./controllers/childControllers");
const parentsControllers = require("./controllers/parentsController");
const structuresControllers = require("./controllers/stucturesControllers");
const reservationControllers = require("./controllers/reservationControllers");
const documentsControllers = require("./controllers/documentsController");
const employeesControllers = require("./controllers/employeesControllers");
const authControllers = require("./controllers/authControllers");

// users
router.get("/users", usersControllers.browse);
router.get("/users/:id", usersControllers.read);
router.put("/users/:id", usersControllers.edit);
router.post("/users", hashPassword, usersControllers.add);
router.post("/users/login", authControllers.login);
router.delete("/users/:id", usersControllers.destroy);

// assignments
router.get("/assignments", assignmentsControllers.browse);
router.get("/assignments/:id", assignmentsControllers.read);
router.put("/assignments/:id", assignmentsControllers.edit);
router.post("/assignments", assignmentsControllers.addOne);
router.delete("/assignments/:id", assignmentsControllers.destroy);

// child
router.get("/child", childControllers.browse);
router.get("/child/:id", childControllers.read);
router.get("/child/parent/:id", childControllers.readByParentId);
router.put("/child/:id", childControllers.edit);
router.post("/child", childControllers.add);
router.delete("/child/:id", childControllers.destroy);

// disponibilites
router.get(
  "/available-employees",
  disponibilitiesControllers.getAvailableEmployees
);
router.get("/disponibilities", disponibilitiesControllers.browse);
router.get("/disponibilities/:id", disponibilitiesControllers.read);
router.put("/disponibilities/:id", disponibilitiesControllers.edit);
router.put(
  "/disponibilities/:id/decrement",
  disponibilitiesControllers.decrementPlaces
);
router.post("/disponibilities", disponibilitiesControllers.add);
router.delete("/disponibilities/:id", disponibilitiesControllers.destroy);

// documents
router.get("/documents", documentsControllers.browse);
router.get("/documents/:id", documentsControllers.read);
router.put("/documents/:id", documentsControllers.edit);
router.post("/documents", documentsControllers.add);
router.delete("/documents/:id", documentsControllers.destroy);

// employees
router.get("/employees", employeesControllers.browse);
router.get("/employees/:id", employeesControllers.read);
router.put("/employees/:id", employeesControllers.edit);
router.post("/employees", employeesControllers.add);
router.delete("/employees/:id", employeesControllers.destroy);

// parents
router.get("/parents", parentsControllers.browse);
router.get("/parents/:user_id", parentsControllers.readByUserId);
router.put("/parents/:id", parentsControllers.edit);
router.post("/parents", parentsControllers.add);
router.post("/parent", parentsControllers.addForReservation);
router.delete("/parents/:id", parentsControllers.destroy);

// reservation
router.get("/reservation", reservationControllers.browse);
router.get("/reservation/:id", reservationControllers.read);
router.get("/reservation/:id", reservationControllers.getId);
router.get("/reservation/:id/parent", reservationControllers.getParentId);
router.get(
  "/reservation/:id/prices",
  reservationControllers.getReservationPrice
);
router.get("/calendar", reservationControllers.readForCalendar);
router.get("/listofrequests", reservationControllers.readForListRequests);
router.get(
  "/reservation/:id/details",
  reservationControllers.getReservationDetailsById
);
router.get(
  "/reservation/:id/status",
  reservationControllers.getReservationStatus
);
router.get("/reservation/:id/child", childControllers.readChildReservation);
router.put("/reservation/:id", reservationControllers.edit);
router.put("/reservation/:id/prices", reservationControllers.updatePrices);
router.put(
  "/reservation/:id/details",
  reservationControllers.updateReservationAndParentDetails
);
router.put(
  "/reservation/:id/status",
  reservationControllers.updateReservationStatus
);
router.put("/reservation/:id/child", childControllers.updateChildInfo);
router.post("/reservation", reservationControllers.add);
router.delete("/reservation/:id", reservationControllers.destroy);

// structures
router.get("/structures", structuresControllers.browse);
router.get("/structures/:user_id", structuresControllers.readByUserId);
router.put("/structures/:id", structuresControllers.edit);
router.post("/structures", structuresControllers.add);
router.delete("/structures/:id", structuresControllers.destroy);

module.exports = router;
