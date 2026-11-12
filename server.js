const express = require("express");
const mongoose = require("mongoose");

const app = express();

const PORT = 5000;

// Middleware
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.send("MERN Backend Server is running!");
});
// Health check route
app.get("/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Server is healthy",
    database: mongoose.connection.readyState === 1
      ? "Connected"
      : "Disconnected",
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

mongoose.connect("mongodb://127.0.0.1:27017/mern_practice").then(() =>{
    console.log("Connected to MongoDB");
}).catch((err) =>{ 
    console.error("Error connecting to MongoDB:", err);
})