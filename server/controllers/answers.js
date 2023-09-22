import Answers from "../models/Answers.js";
import Questions from "../models/Questions.js";
import { checkAnswer } from "./chatGpt.js";

export const submitAnswers = async (req, res) => {
  try {
    const singleDocument = req.body;
    const { userId, interviewId } = singleDocument;
    const attemptNumber = await Answers.find({
      interviewId,
      userId,
    }).sort({
      attemptNumber: 1,
    });
    console.log("att", attemptNumber);
    const currentAttempt =
      attemptNumber.length !== 0 ? attemptNumber[0].attemptNumber + 1 : 0;
    console.log("body", singleDocument);
    console.log("hey man reached here again");
    const answer = new Answers({
      attemptNumber: currentAttempt,
      ...singleDocument,
    });
    const savedAnswer = await answer.save();
    // const response = await Answers.insertOne(singleDocument);
    res.status(200).json(savedAnswer);
  } catch (error) {
    res.status(400).json({ error });
    console.log(error);
  }
};
export const showSubmissions = async (req, res) => {
  try {
    const { userId } = req.params;
    const submission = await Answers.find(
      {
        userId,
      },
      { answers: 0 }
    ).sort({
      updatedAt: 1,
    });
    res.status(200).json(submission);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
export const getResult = async (req, res) => {
  try {
    const { id } = req.params;
    const submission = await Answers.findById(id);
    if (!submission) {
      // Handle the case where the document with the provided ID is not found
      return res.status(404).json({ message: "Submission not found." });
    }
    console.log("submission", submission);
    const interviewId = submission.interviewId;
    // console.log("id", interviewId);
    const answers = submission.answers;
    const questions = await Questions.find({
      interviewId: interviewId[0],
    }).sort({
      questionNumber: 1,
    });
    // console.log("questions", questions);
    const mergedArray = questions.map((question) => {
      const matchedAnswer = answers.find(
        (answer) => answer.question_id === question._id.toString()
      );
      return {
        ...question._doc,
        ...matchedAnswer,
      };
    });
    // console.log("merged", mergedArray);
    res.status(200).json(mergedArray);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const checkMarked = async (req, res) => {
  console.log("id", req.params.submissionId);
  try {
    const { submissionId } = await req.params;
    const submission = await Answers.findById(submissionId);
    if (!submission) {
      // Handle the case where the document with the provided ID is not found
      return res.status(403).json({ message: "Submission not found." });
    }
    res.status(200).json(submission);
  } catch (error) {
    res.status(400).json({ message: error });
  }
};
export const evaluate = async (req, res) => {
  try {
    const { submissionId } = await req.params;
    console.log("id", submissionId);
    const submission = await Answers.findById(submissionId);
    if (!submission) {
      // Handle the case where the document with the provided ID is not found
      return res.status(403).json({ message: "Submission not found." });
    }
    const interviewId = submission.interviewId;
    console.log("id", interviewId);
    const answers = submission.answers;
    const questions = await Questions.find({
      interviewId: interviewId[0],
    }).sort({
      questionNumber: 1,
    });
    // console.log("questions", questions);
    const mergedArray = questions.map((question) => {
      const matchedAnswer = answers.find(
        (answer) => answer.question_id === question._id.toString()
      );
      return {
        ...question._doc,
        ...matchedAnswer,
      };
    });
    console.log("mer", mergedArray);
    const outputArray = mergedArray.map((item) => ({
      questionId: item._id,
      questionAsked: item.question.questionAsked,
      transcript: item.transcript,
    }));
    const score = await checkAnswer(outputArray);
    res.status(200).json(score);
  } catch (error) {
    res.status(400).json({ message: error });
  }
};
