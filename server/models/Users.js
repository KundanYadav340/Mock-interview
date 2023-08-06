import mongoose from "mongoose";

const interviewUserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      ref: "Interview",
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    friends: {
      type: Array,
      items: {
        friendId: {
          type: [mongoose.Types.ObjectId],
          ref: "User",
          unique: true,
        },
        friendName: {
          type: String,
          required: true,
        },
      },
      default: [],
    },
    subscriptions: {
      type: Array,
      items: {
        interviewId: {
          type: [mongoose.Types.ObjectId],
          ref: "Interviews",
          unique: true,
        },
        interviewName: {
          type: String,
          required: true,
        },
      },
      default: [],
    },
    profileImg: {
      type: String,
      default: "",
    },
    streams: {
      type: Array,
      default: [],
    },
    attemptedInterviews: {
      type: Array,
      items: {
        interviewId: {
          type: [mongoose.Types.ObjectId],
          ref: "Interviews",
          unique: true,
        },
        interviewName: {
          type: String,
          required: true,
        },
        createdAt: Date,
      },
      default: [],
    },
  },
  { timestamps: true }
);

const InterviewUser = mongoose.model("InterviewUser", interviewUserSchema);
export default InterviewUser;
