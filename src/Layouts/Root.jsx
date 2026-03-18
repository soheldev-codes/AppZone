import React from "react";
import { Outlet } from "react-router";
import Navbar from "../Components/Shared/Navbar";

const Root = () => {
  return (
    <>
      <Navbar />

      <Outlet />

      <h1>Footer</h1>
    </>
  );
};

export default Root;
