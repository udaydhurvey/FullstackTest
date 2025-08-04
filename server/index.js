import dotenv from "dotenv";
dotenv.config();

import express from "express";
import connectDB from "./src/config/db.js";


const app = express();
app.get("/", (req, res) => {
  res.json({ message: "server connected " });
});

app.use((err, req, res, next) => {
  const errorMessage = err.message || "Internal Server Error";
  const errorCode = err.statusCode || 500;
  res.status(errorCode).json({ message: errorMessage });
});

const port =process.env.PORT||5000;

app.listen(port,() => {
console.log("server run at " , port);
connectDB();
})