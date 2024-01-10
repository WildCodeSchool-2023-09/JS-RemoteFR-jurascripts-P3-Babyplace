import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import App from "./App";
import NotFound from "./pages/NotFound";
import Login from "./pages/structure/Login";
import Register from "./pages/structure/Register";
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
import Home from "./pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/parents/subscribe",
        element: <ParentsInscription />,
      },
      {
        path: "/parents/connexion",
        element: <ParentsConnexion />,
      },
      {
        path: "/parents/rules",
        element: <ParentsTutorial />,
      },
      {
        path: "/pro/login",
        element: <Login />,
      },
      {
        path: "/pro/register",
        element: <Register />,
      },
      {
        path: "/parents/reservation",
        element: <Reservation />,
      },
      {
        path: "/parents/reservation/creation",
        element: <ReservationTunnel />,
      },
      {
        path: "/parents/creche",
        element: <Creche />,
      },
      {
        path: "/parents/crechenotfound",
        element: <CrecheNoRDV />,
      },
      {
        path: "/parents/folders",
        element: <Folders />,
      },
      {
        path: "/pro/dashboard",
        element: <Dashboard />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
