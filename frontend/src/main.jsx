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
import Profile from "./components/parents/Profile";
import ParentsInscription from "./pages/parents/ParentsInscription";
import ParentsConnexion from "./pages/parents/ParentsConnexion";
import ParentsTutorial from "./pages/parents/ParentsTutorial";
import Creche from "./pages/parents/Creche";
import CrecheNoRDV from "./pages/parents/CrecheNoRDV";
import CrecheDetails from "./components/parents/CrecheDetails";
import Home from "./pages/Home";

const isAuthenticated = () => {
  const token = localStorage.getItem("auth");
  return !!token;
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
        path: "/pro/login",
        element: <Login />,
      },
      {
        path: "/pro/register",
        element: <Register />,
      },
      {
        path: "/parents/profile",
        element: isAuthenticated() ? <Profile /> : <Navigate to="/" />,
      },
      {
        path: "/parents/reservation",
        element: isAuthenticated() ? <Reservation /> : <Navigate to="/" />,
      },
      {
        path: "/parents/reservation/creation",
        element: isAuthenticated() ? (
          <ReservationTunnel />
        ) : (
          <Navigate to="/" />
        ),
      },
      {
        path: "/parents/creche",
        element: isAuthenticated() ? <Creche /> : <Navigate to="/" />,
      },
      {
        path: "/parents/crechenotfound",
        element: isAuthenticated() ? <CrecheNoRDV /> : <Navigate to="/" />,
      },
      {
        path: "/parents/crechedetails",
        element: <CrecheDetails />,
      },
      {
        path: "/parents/folders",
        element: isAuthenticated() ? <Folders /> : <Navigate to="/" />,
      },
      {
        path: "/pro/dashboard",
        element: isAuthenticated() ? <Dashboard /> : <Navigate to="/" />,
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
