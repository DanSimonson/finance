import React from "react";
import { Outlet, Navigate, Link } from "react-router-dom";
import Login from "./Components/Login";
import useAuth from "./CustomHooks/useAuth";

const ProtectedRoutes = () => {
  let isAuth = useAuth();
  return isAuth ? <Outlet /> : <Login />;
};

export default ProtectedRoutes;