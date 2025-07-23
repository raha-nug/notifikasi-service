import express from "express";
import cors from "cors";
const app = express();
import eventRoute from "../src/interfaces/routes/eventRoute.js";

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use("/api/notifikasi", eventRoute);
app.get("/", (req, res) => {
  res.send("Welcome to the Notifikasi Service API");
});

export default app;
