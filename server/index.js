import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";

import interviewRoutes from "./routes/interview.js";
import answerRoutes from "./routes/answer.js";
import clientRoutes from "./routes/client.js";
import chatGptRoutes from "./routes/chatGpt.js";

dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

import Interview from "./models/Interviews.js";
import { interview } from "./data.js";
import Questions from "./models/Questions.js";
import { q2 } from "./data.js";

app.use("/interview", interviewRoutes);
app.use("/answers", answerRoutes);
app.use("/client", clientRoutes);
app.use("/chatGpt", chatGptRoutes);

const PORT = process.env.PORT || 6000;

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => {
      //Interview.insertMany(interview);
      // Questions.insertMany(q2);
      console.log(`Server running on ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(`${error} did not connect`);
  });
