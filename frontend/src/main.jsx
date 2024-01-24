import React from "react";
import ReactDOM from "react-dom/client";
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import App from "./App";
import "./App.css";
import CrecheDetails from "./components/parents/CrecheDetails";
import Folders from "./components/parents/Folders";
import Profile from "./components/parents/Profile";
import Reservation from "./components/parents/Reservation";
import ReservationTunnel from "./components/parents/ReservationTunnel";
import Calendar from "./components/structure/Calendar";
import ReservationDashboard from "./components/structure/ReservationDashboard";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import AgendaParents from "./pages/parents/AgendaParents";
import Creche from "./pages/parents/Creche";
import CrecheNoRDV from "./pages/parents/CrecheNoRDV";
import DossierEnfants from "./pages/parents/DossierEnfants";
import DossierInscription from "./pages/parents/DossierInscription";
import DossierParents from "./pages/parents/DossierParents";
import Layout from "./pages/parents/Layout";
import LayoutProfile from "./pages/parents/LayoutProfile";
import ParentsConnexion from "./pages/parents/ParentsConnexion";
import ParentsInscription from "./pages/parents/ParentsInscription";
import ParentsTutorial from "./pages/parents/ParentsTutorial";
import Dashboard from "./pages/structure/Dashboard";
import Login from "./pages/structure/Login";
import Register from "./pages/structure/Register";

const isAuthenticated = () => {
  const structureToken = localStorage.getItem("auth");
  const parentToken = localStorage.getItem("userToken");

  return !!structureToken || !!parentToken;
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
        element: isAuthenticated() ? <ParentsTutorial /> : <Navigate to="/" />,
      },
      {
        path: "/parents",
        element: <Layout />,
        children: [
          {
            path: "profile",
            element: isAuthenticated() ? (
              <LayoutProfile />
            ) : (
              <Navigate to="/" />
            ),
            children: [
              {
                path: "",
                element: <Profile />,
              },
            ],
          },
          {
            path: "reservation",
            element: isAuthenticated() ? <Reservation /> : <Navigate to="/" />,
          },
          {
            path: "reservation/creation",
            element: isAuthenticated() ? (
              <ReservationTunnel />
            ) : (
              <Navigate to="/" />
            ),
          },
          {
            path: "creche",
            element: isAuthenticated() ? <Creche /> : <Navigate to="/" />,
          },
          {
            path: "crechenotfound",
            element: isAuthenticated() ? <CrecheNoRDV /> : <Navigate to="/" />,
          },
          {
            path: "agendaparents",
            element: <AgendaParents />,
          },
          {
            path: "crechedetails",
            element: <CrecheDetails />,
          },
          {
            path: "folders",
            element: isAuthenticated() ? <Folders /> : <Navigate to="/" />,
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
        element: isAuthenticated() ? <Dashboard /> : <Navigate to="/" />,
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
