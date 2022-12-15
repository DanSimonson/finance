/**{
      useUnifiedTopology: true
      useNewUrlParser: true
      useCreateIndex: true
    } */
// import mongoose from "mongoose";
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const connectDB = async () => {
  console.log("process.env.MONGODB_URL: ", process.env.MONGODB_URL);
  try {
    const connection = await mongoose.connect(process.env.MONGODB_URL);
    console.log(`MongoDB Connected: ${connection.connection.host}`);
  } catch (error) {
    console.error(`Mongo connect error: ${error.message}`);
    process.exit(1);
  }
};
module.exports = {
  connectDB,
};
