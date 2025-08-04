import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import morgan from "morgan";
import connectDB from "./src/config/db.js";
import AuthRoutes from "./src/routes/authRoutes.js"


const app = express();
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(express.json());
app.use(morgan("dev"));

app.use("/auth", AuthRoutes);

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