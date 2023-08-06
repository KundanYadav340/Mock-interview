import mongoose from "mongoose";

const questionSchema = new mongoose.Schema(
  {
    questionNumber: Number,
    interviewId: {
      type: [mongoose.Types.ObjectId],
      ref: "Interview",
    },
    question: {
      type: Object,
      required: true,
    },
    type: {
      type: String,
      enum: ["singleChoice", "multipleChoice", "text", "audioText", "video"],
      required: true,
    },
    duration: {
      type: Number,
      required: true,
    },
    answer: {
      type: Object,
      default: {},
    },
    maxMarks: {
      type: Number,
      default: 100,
    },
    hint: Array,
    images: Array,
    level: {
      type: String,
      enum: ["easy", "medium", "hard"],
    },
    tags: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true }
);

const Questions = mongoose.model("Questions", questionSchema);
export default Questions;
