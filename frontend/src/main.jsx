import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import App from "./App";
import NotFound from "./pages/NotFound";
import StructureConnexion from "./pages/structure/StructureConnexion";
import Reservation from "./components/parents/Reservation";
import ReservationTunnel from "./components/parents/ReservationTunnel";
import Folders from "./components/parents/Folders";
import CrecheDetails from "./components/parents/CrecheDetails";
import Dashboard from "./pages/structure/Dashboard";
import ParentsInscription from "./pages/parents/ParentsInscription";
import ParentsConnexion from "./pages/parents/ParentsConnexion";
import ParentsTutorial from "./pages/parents/ParentsTutorial";
import Creche from "./pages/parents/Creche";
import CrecheNoRDV from "./pages/parents/CrecheNoRDV";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/parents/subscribe" element={<ParentsInscription />} />
        <Route path="/parents/connexion" element={<ParentsConnexion />} />
        <Route path="/parents/rules" element={<ParentsTutorial />} />
        <Route path="/pro/connexion" element={<StructureConnexion />} />
        <Route path="/parents/reservation" element={<Reservation />} />
        <Route
          path="/parents/reservation/creation"
          element={<ReservationTunnel />}
        />
        <Route path="/parents/creche" element={<Creche />} />
        <Route path="/parents/crechenotfound" element={<CrecheNoRDV />} />
        <Route path="/parents/crechedetails" element={<CrecheDetails />} />
        <Route path="/parents/folders" element={<Folders />} />
        <Route path="/pro/dashboard" element={<Dashboard />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
