const ParentsManager = require("./models/ParentsManager");
const StructureManager = require("./models/StructureManager");
const ChildManager = require("./models/ChildManager");
const ReservationManager = require("./models/ReservationManager");
const DocumentsManager = require("./models/DocumentsManager");
const UsersManager = require("./models/UsersManager");
const AssignmentsManager = require("./models/AssignmentsManager");
const DisponibilitiesManager = require("./models/DisponibilitiesManager");
const EmployeesManager = require("./models/EmployeesManager");

const managers = [
  ParentsManager,
  StructureManager,
  ChildManager,
  ReservationManager,
  DocumentsManager,
  UsersManager,
  AssignmentsManager,
  DisponibilitiesManager,
  EmployeesManager,
];

const tables = {};

managers.forEach((ManagerClass) => {
  const manager = new ManagerClass();
  tables[manager.table] = manager;
});

module.exports = new Proxy(tables, {
  get(obj, prop) {
    if (prop in obj) return obj[prop];
    throw new ReferenceError(
      `tables.${prop} is not defined. Did you register it in ${__filename}?`
    );
  },
});
