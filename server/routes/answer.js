import express from "express";
import {
  submitAnswers,
  getResult,
  showSubmissions,
} from "./../controllers/answers.js";

const router = express.Router();
router.post("/submitAnswers", submitAnswers);
router.get("/getResult/:id", getResult);
router.get("/submission/:userId", showSubmissions);

export default router;
