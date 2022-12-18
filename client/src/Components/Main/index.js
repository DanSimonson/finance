import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./Main.module.css";

const Main = () => {
  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    try {
      let { data } = await axios.get("/api/users/");
      if (data) {
        console.log("data.users: ", data.users);
      }
    } catch (error) {
      console.log("error: ", error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("userInfo");
    window.location.reload();
  };

  return (
    <div className={styles.main_container}>
      <nav className={styles.navbar}>
        <h1>BANK PORTAL</h1>
        <button className={styles.white_btn} onClick={handleLogout}>
          Logout
        </button>
        
      </nav>
    </div>
  );
};

export default Main;
