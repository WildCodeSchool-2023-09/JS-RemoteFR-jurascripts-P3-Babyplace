import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import "./App.css";
import App from "./App";
import NotFound from "./pages/NotFound";
import Login from "./pages/structure/Login";
import Register from "./pages/structure/Register";
import Reservation from "./components/parents/Reservation";
import ReservationTunnel from "./components/parents/ReservationTunnel";
import Folders from "./components/parents/Folders";
import Dashboard from "./pages/structure/Dashboard";
import Layout from "./pages/parents/Layout";
import Profile from "./components/parents/Profile";
import ParentsInscription from "./pages/parents/ParentsInscription";
import ParentsConnexion from "./pages/parents/ParentsConnexion";
import ParentsTutorial from "./pages/parents/ParentsTutorial";
import Creche from "./pages/parents/Creche";
import CrecheNoRDV from "./pages/parents/CrecheNoRDV";
import CrecheDetails from "./components/parents/CrecheDetails";
import Home from "./pages/Home";
import ReservationDashboard from "./components/structure/ReservationDashboard";
import Calendar from "./components/structure/Calendar";
import DossierParents from "./pages/parents/DossierParents";
import DossierEnfants from "./pages/parents/DossierEnfants";
import DossierInscription from "./pages/parents/DossierInscription";

const isParentAuthenticated = () => {
  const parentToken = localStorage.getItem("parentToken");
  return !!parentToken;
};

const isStructureAuthenticated = () => {
  const structureToken = localStorage.getItem("structureToken");
  return !!structureToken;
};

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
        element: isParentAuthenticated() ? (
          <ParentsTutorial />
        ) : (
          <Navigate to="/" />
        ),
      },
      {
        path: "/parents",
        element: <Layout />,
        children: [
          {
            path: "profile",
            element: isParentAuthenticated() ? (
              <Profile />
            ) : (
              <Navigate to="/" />
            ),
          },
          {
            path: "reservation",
            element: isParentAuthenticated() ? (
              <Reservation />
            ) : (
              <Navigate to="/" />
            ),
          },
          {
            path: "reservation/creation",
            element: isParentAuthenticated() ? (
              <ReservationTunnel />
            ) : (
              <Navigate to="/" />
            ),
          },
          {
            path: "creche",
            element: isParentAuthenticated() ? <Creche /> : <Navigate to="/" />,
          },
          {
            path: "crechenotfound",
            element: isParentAuthenticated() ? (
              <CrecheNoRDV />
            ) : (
              <Navigate to="/" />
            ),
          },
          {
            path: "crechedetails",
            element: isParentAuthenticated() ? (
              <CrecheDetails />
            ) : (
              <Navigate to="/" />
            ),
          },
          {
            path: "folders",
            element: isParentAuthenticated() ? <Folders /> : <Navigate to="/" />,
            children: [
              {
                path: "dossierparent",
                element: <DossierParents />,
              },
              {
                path: "dossierenfant",
                element: <DossierEnfants />,
              },
              {
                path: "dossierinscription",
                element: <DossierInscription />,
              },
            ],
          },
        ],
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
        path: "/pro/dashboard",
        element: isStructureAuthenticated() ? (
          <Dashboard />
        ) : (
          <Navigate to="/" />
        ),
      },
      {
        path: "/pro/dashboard",
        element: <Dashboard />,
        children: [
          {
            path: "reservationdashboard",
            element: <ReservationDashboard />,
          },
          {
            path: "agenda",
            element: <Calendar />,
          },
        ],
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
