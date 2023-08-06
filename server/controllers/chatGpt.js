import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  organization: "org-ZvDSze4mo7yXPfvDXsQqmyqo",
  apiKey: "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",
});
export const getGptHelp = async (req, res) => {
  try {
    // Get the prompt from the request
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

export const checkAnswer = async (req, res) => {
  try {
    // Get the prompt from the request
    const { question, length, markingCriteria } = req.body;
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
  } catch (error) {
    res.status(400).json({ error });
    console.log(error);
  }
};
