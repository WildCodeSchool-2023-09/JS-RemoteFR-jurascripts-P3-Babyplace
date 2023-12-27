import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import App from "./App";
import NotFound from "./pages/NotFound";
import StructureConnexion from "./pages/structure/StructureConnexion";
import ParentsConnexion from "./pages/parents/ParentsConnexion";
import ParentsTutorial from "./pages/parents/ParentsTutorial";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/parents/connexion" element={<ParentsConnexion />} />
        <Route path="/parents/rules" element={<ParentsTutorial />} />
        <Route path="/pro/connexion" element={<StructureConnexion />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
