const mongoose = require("mongoose");

const databaseConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL || "mongodb://127.0.0.1:27017/task_book_db");
    console.log("Database connected successfully!");
  } catch (err) {
    console.error("Database connection failed:", err);
  }
};

module.exports = databaseConnection;
