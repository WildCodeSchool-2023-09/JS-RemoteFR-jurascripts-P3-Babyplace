import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../../components/parents/NavBar";

function Layout() {
  return (
    <>
      <Outlet />
      <NavBar />
    </>
  );
}

export default Layout;
