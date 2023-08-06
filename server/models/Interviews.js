import mongoose from "mongoose";

const interviewSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    stream: {
      type: Array,
      required: true,
    },
    description: {
      type: String,
      default: "",
    },
    duration: {
      type: Number,
      required: true,
    },
    tags: {
      type: Array,
      required: true,
    },
    amount: {
      type: Number,
      default: 0,
    },
    enrolledStudents: {
      type: Array,
    },
    creator: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      default: 0,
    },
    questions: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true }
);

const Interview = mongoose.model("Interview", interviewSchema);
export default Interview;
