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
import Dashboard from "./pages/structure/Dashboard";
import ParentsInscription from "./pages/parents/ParentsInscription";
import ParentsConnexion from "./pages/parents/ParentsConnexion";
import ParentsTutorial from "./pages/parents/ParentsTutorial";
import Creche from "./pages/parents/Creche";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/parents/subscribe" element={<ParentsInscription />} />
        <Route path="/parents/connexion" element={<ParentsConnexion />} />
        <Route path="/parents/rules" element={<ParentsTutorial />} />
        <Route path="/pro/connexion" element={<StructureConnexion />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/reservation/creation" element={<ReservationTunnel />} />
        <Route path="/reservation/creation/creche" element={<Creche />} />
        <Route path="/folders" element={<Folders />} />
        <Route path="/pro/dashboard" element={<Dashboard />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
