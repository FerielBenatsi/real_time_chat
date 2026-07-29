import express from "express";
import "dotenv/config";
import User from "./models/user.model.js";
import cors from "cors";
import connectDB from "./lib/db.js";
import { clerkMiddleware } from "@clerk/express";

const app = express();
const port = process.env.PORT;
const FRONTEND_URL = process.env.FRONTEND_URL;

app.use(express.json());
app.use(cors({ origin: FRONTEND_URL, credentials: true }));
app.use(clerkMiddleware());

app.get("/health", (req, res) => {
  res.status(200).json({ message: "Server is running!" });
});
app.listen(port, () => {
  connectDB();
  console.log("server is up and running in port " + port);
});
