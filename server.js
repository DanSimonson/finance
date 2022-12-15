const path = require("path");
const express = require("express");
const mongoose = require("mongoose")
//import connectDB from "./config/db.js";


//connectDB()
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Handle GET requests to /express_backend route
app.get("/express_backend", (req, res) => {
    res.send({ message: "EXPRESS CONNECTED TO REACT AND READY TO UPLOAD EXCEL" });
  });
  
  // Have Node serve the files for our built React app
  app.use(express.static(path.resolve(__dirname, "./client/build")));
  
  // All other GET requests not handled before will return our React app
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./client/build", "index.html"));
  });
  

const port = process.env.PORT || 5001;

app.listen(port, () => console.log(`Server Running on PORT... ${port}`));