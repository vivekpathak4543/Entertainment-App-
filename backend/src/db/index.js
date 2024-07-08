const mongoose = require("mongoose");
const dotenv = require("dotenv");

// Initialize dotenv to load environment variables from .env file
dotenv.config();

// Connect to database
const connectDB = async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${process.env.DB_NAME}`);
    console.log("Connected to database successfully");
  } catch (error) {
    console.error("Database connection error:", error);
    process.exit(1);
  }
};

module.exports = connectDB;
