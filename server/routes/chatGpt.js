import express from "express";
import { getGptHelp } from "./../controllers/chatGpt.js";

const router = express.Router();
router.post("/getGptHelp", getGptHelp);

export default router;
