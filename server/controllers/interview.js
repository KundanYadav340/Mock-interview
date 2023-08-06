import Interview from "../models/Interviews.js";
import Questions from "../models/Questions.js";

export const getInterview = async (req, res) => {
  try {
    const interview = await Interview.find();
    res.status(200).json(interview);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getQuestions = async (req, res) => {
  try {
    const { interviewId } = req.params;
    const questions = await Questions.find({
      interviewId,
    }).sort({
      questionNumber: 1,
    });
    res.status(200).json(questions);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
