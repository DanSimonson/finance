import React, { useState, useEffect } from "react";
import "./App.css";
// import axios from "axios";
// import styled from "styled-components";
import { Route, Routes, Navigate } from "react-router-dom";
import ProtectedRoutes from "./ProtectedRoutes";
import Main from "./Components/Main";
import Login from "./Components/Login";
import Signup from "./Components/Signup";

function App() {
  // const user = localStorage.getItem("userInfo");
  // console.log("user: ", user);

  return (
    <>
      <Routes>
        <Route element={<ProtectedRoutes />}>
          <Route path="/" exact element={<Main />} />
        </Route>
        <Route path="/login" exact element={<Login />} />
        <Route path="/signup" exact element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;
