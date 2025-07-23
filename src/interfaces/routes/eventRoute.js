import express from "express";
import { handleEvent } from "../eventHandlerController.js";

const router = express.Router();

// Ini adalah satu-satunya endpoint untuk layanan ini.
// Ia bertindak sebagai 'webhook' atau 'subscriber' untuk semua event dari layanan lain.
router.post("/handle-event", handleEvent);

export default router;
