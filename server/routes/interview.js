import express from 'express';
import { getInterview, getQuestions } from './../controllers/interview.js';

const router = express.Router();

router.get("/", getInterview);
router.get("/questions/:interviewId", getQuestions);


export default router;