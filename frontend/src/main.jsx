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
        path: "/parents",
        element: <Layout />,
        children: [
          {
            path: "rules",
            element: isAuthenticated() ? (
              <ParentsTutorial />
            ) : (
              <Navigate to="/" />
            ),
          },
          {
            path: "profile",
            element: isAuthenticated() ? <Profile /> : <Navigate to="/" />,
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
            path: "crechedetails",
            element: <CrecheDetails />,
          },
          {
            path: "folders",
            element: isAuthenticated() ? <Folders /> : <Navigate to="/" />,
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
