import dotenv from "dotenv";
dotenv.config();
import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  organization: "org-ZvDSze4mo7yXPfvDXsQqmyqo",
  apiKey: process.env.OPENAI_API_KEY,
});
export const getGptHelp = async (req, res) => {
  try {
    // Get the prompt from the request
    console.log("api key", process.env.OPENAI_API_KEY);
    const { prompt } = req.body;
    const prompt2 = `suggest me some  hints about the question : ${prompt} to speak in an interview`;
    const openai = new OpenAIApi(configuration);
    const response = await openai.createChatCompletion({
      model: "gpt-3.5-turbo-16k-0613",
      messages: [
        {
          role: "user",
          content: prompt2,
        },
      ],
      temperature: 1,
      max_tokens: 256,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    });
    console.log("response", response);
    res.status(200).json({
      error: false,
      message: "Found this",
      doc: response.data.choices[0].message,
    });
    // res.status(200).json({ message: response.data.choices[0].message });
  } catch (error) {
    res.status(400).json({ error });
    console.log(error);
  }
};

export const checkAnswer = async (data) => {
  try {
    // Get the prompt from the request
    const openai = new OpenAIApi(configuration);
    const response = await openai.createChatCompletion({
      model: "gpt-3.5-turbo-16k-0613",
      messages: [
        {
          role: "system",
          content:
            "you are an interviewer and the question asked by you is given as questionAsked and answer given by interviewee is in transcript",
        },
        {
          role: "system",
          content:
            "the data will be provided to you and you have to give score on a scale of 1 to 100",
        },
        {
          role: "system",
          content:
            "give marks only when answer is correct and related to question asked",
        },
        {
          role: "system",
          content: "reduce marks if the question is incorrect or unrelated",
        },
        {
          role: "system",
          content: "reduce marks if the question is short than expected by you",
        },
        {
          role: "system",
          content:
            "insert the score in the given array of objects and in response only give the stringified json between ###",
        },
        {
          role: "user",
          content: data,
        },
      ],
      temperature: 1,
      max_tokens: 256,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    });
    console.log("response", response);
    return response;
  } catch (error) {
    return "some error";
  }
};
