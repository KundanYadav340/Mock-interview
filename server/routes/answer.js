import express from "express";
import {
  submitAnswers,
  getResult,
  showSubmissions,
  checkMarked,
  evaluate,
} from "./../controllers/answers.js";

const router = express.Router();
router.get("/checkMarked/:submissionId", checkMarked);
router.post("/submitAnswers", submitAnswers);
router.get("/getResult/:id", getResult);
router.get("/submission/:userId", showSubmissions);
router.get("/evaluate/:submissionId", evaluate);

export default router;
