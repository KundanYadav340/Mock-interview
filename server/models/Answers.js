import mongoose from "mongoose";

const subSchema = new mongoose.Schema({
  question_id: {
    type: [mongoose.Types.ObjectId],
    ref: "Questions",
    required: true,
  },
  status: {
    type: String,
    enum: ["notSeen", "seen", "attempted"],
    required: true,
  },
  selectedOptions: {
    type: Array,
    default: [],
  },
    transcript:{
      type:String,
        default:""
    },
  timeTaken: {
    type: Number,
    default: 0,
  },
  viewedHint: {
    type: Boolean,
    default: false,
  },
  answerLink: {
    type: Array,
    default: [],
  },
  correct: {
    type: Boolean,
    default: false,
  },
  score: {
    type: Number,
    default: null,
  },
});
const answerSchema = new mongoose.Schema(
  {
    userId: {
      required: true,
      type: [mongoose.Types.ObjectId],
      ref: "User",
    },
    interviewId: {
      type: [mongoose.Types.ObjectId],
      ref: "Interview",
    },
    completed: {
      type: String,
      default: "completed",
    },
    totalTime: {
      type: Number,
      required: true,
    },
    attemptNumber: {
      type: Number,
      default: 0,
    },
    resultSeen: {
      type: Boolean,
      default: false,
    },
    marked: {
      type: Boolean,
      default: false,
    },
    answers: {
      type: Array,
      items: {
        type: subSchema,
      },
      required: true,
    },
  },
  { timestamps: true }
);

const Answers = mongoose.model("Answers", answerSchema);
export default Answers;
