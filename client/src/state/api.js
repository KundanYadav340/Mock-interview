import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URL }),
  reducerPath: "adminApi",
  tagTypes: [
    "Interview",
    "Questions",
    "SubmitAnswers",
    "RegisterUser",
    "Help",
    "LoginUser",
    "Submissions",
    "Results",
    "OneSubmission",
    "Evaluate",
  ],
  endpoints: (build) => ({
    getInterview: build.query({
      query: () => "interview",
      providesTags: ["Interview"],
    }),
    getQuestions: build.query({
      query: (id) => `interview/questions/${id}`,
      providesTags: ["Questions"],
    }),
    getResult: build.query({
      query: (id) => `answers/getResult/${id}`,
      providesTags: ["Results"],
    }),
    getOneSubmission: build.query({
      query: (id) => `answers/checkMarked/${id}`,
      method: "GET",
      providesTags: ["OneSubmission"],
    }),
    getSubmissions: build.query({
      query: (userId) => `answers/submission/${userId}`,
      providesTags: ["Submissions"],
    }),
    submitAnswers: build.mutation({
      query: ({ userId, interviewId, completed, totalTime, answers }) => ({
        url: "answers/submitAnswers",
        method: "POST",
        body: {
          userId: userId,
          interviewId: interviewId,
          completed: completed,
          totalTime: totalTime,
          answers: answers,
        },
      }),
      providesTags: ["SubmitAnswers"],
    }),
    registerUser: build.mutation({
      query: ({ name, email, password }) => ({
        url: "client/registerUser",
        method: "POST",
        body: { name: name, email: email, password: password },
      }),
      providesTags: ["RegisterUser"],
    }),
    getHelp: build.mutation({
      query: ({ prompt }) => ({
        url: "chatGpt/getGptHelp",
        method: "POST",
        body: { prompt: prompt },
      }),
      providesTags: ["Help"],
    }),
    getEvaluate: build.mutation({
      query: (id) => `answers/evaluate/${id}`,
      providesTags: ["Evaluate"],
    }),
    loginUser: build.mutation({
      query: ({ email, password }) => ({
        url: "client/loginUser",
        method: "POST",
        body: { email: email, password: password },
      }),
      providesTags: ["LoginUser"],
    }),
  }),
});

export const {
  useGetInterviewQuery,
  useGetQuestionsQuery,
  useSubmitAnswersMutation,
  useRegisterUserMutation,
  useGetHelpMutation,
  useLoginUserMutation,
  useGetSubmissionsQuery,
  useGetResultQuery,
  useGetOneSubmissionQuery,
  useGetEvaluateMutation,
} = api;
