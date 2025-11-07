require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");


const databaseConnection = require("./database");
const bookRoutes = require("./routes/book.routes");
const authRoutes = require("./routes/auth.routes");

const app = express();
app.use(cors());
app.use(express.json());

// Connect DB
databaseConnection();

// Routes
app.use("/book", bookRoutes);
app.use("/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("Server is running successfully");
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
