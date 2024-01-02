import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import App from "./App";
import NotFound from "./pages/NotFound";
import StructureConnexion from "./pages/structure/StructureConnexion";
import Reservation from "./components/parents/Reservation";
import ReservationTunnel from "./components/parents/ReservationTunnel";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/pro/connexion" element={<StructureConnexion />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/reservation/creation" element={<ReservationTunnel />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
