import { ThemeProvider } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "scenes/home";
import Interview from "scenes/interview";
import { theme } from "theme";
import FullScreens from "scenes/FullScreen";
// import  Login  from "scenes/Login";
import Upload from "./firebase/Upload";
import Login from "scenes/login/index.jsx";
import CreateAccountPage from "scenes/signup";
import Result from "scenes/result";
import ResultPage from "scenes/result/ResultPage";
import ResultStat from "scenes/result/ResultStat";
import Protected from "components/ProtectedRoutes";
import { useDispatch, useSelector } from "react-redux";
import Dashboard from "scenes/result/Dashboard";
import QuestionAnalysis from "scenes/result/QuestionAnalysis";
import Transcription from "components/Transcription";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const user = useSelector((state) => state.global.user);
  return (
    <div className="app">
      <ToastContainer />
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Routes>
            <Route path="/log" element={<Login />} />
            <Route path="/" element={<Home />} />
            <Route
              path="/interview/:interviewId"
              element={
                <Protected isLoggedIn={user}>
                  <Interview />
                </Protected>
              }
            />
            {/* <Route path="/interview/:interviewId" element={<Interview />} /> */}
            <Route path="/full" element={<FullScreens />} />
            <Route path="/trans" element={<Transcription />} />
            <Route path="/upload" element={<Upload />} />
            <Route path="/signup" element={<CreateAccountPage />} />
            <Route path="/" element={<Result />}>
              <Route path="/result" element={<ResultPage />} />
              <Route path="/result/:submissionId" element={<ResultStat />}>
                <Route path="/result/:submissionId" element={<Dashboard />} />
                <Route
                  path="/result/:submissionId/questionAnalysis"
                  element={<QuestionAnalysis />}
                />
              </Route>
            </Route>
            {/* <Route path="/login" element={< />} /> */}
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
