import React, { useState, useEffect } from "react";
import SearchBar from "../Search/SearchBar";
import ListResults from "../List/ListResults";
import axios from "axios";
import styles from "./Main.module.css";

const Main = () => {
  const [results, setResults] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  useEffect(() => {
    getUsers()
  }, []);

  const getUsers = async () => {
    try {
      let { data } = await axios.get("/api/users/");
      if (data) {
        setResults(data.users);
        setSearchResults(data.users)
        
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
      {results && <SearchBar results={results} setSearchResults={setSearchResults} />}
      <ListResults searchResults={searchResults} />
    </div>
  );
};

export default Main;
