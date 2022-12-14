const path = require("path");
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const { userRouter } = require("./backend/routers/userRouter");

const { connectDB } = require("./config/db");
connectDB();
const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routes
app.use("/api/users", userRouter);

//error handling
app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

// Handle GET requests to /express_backend route
app.get("/express_backend", (req, res) => {
  res.send({
    message: "EXPRESS AND MONGODB ARE RUNNING AND CONNECTED TO REACT",
  });
});

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, "./client/build")));

// All other GET requests not handled before will return our React app
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build", "index.html"));
});

const port = process.env.PORT || 5001;

app.listen(port, () => console.log(`Server Running on PORT... ${port}`));
