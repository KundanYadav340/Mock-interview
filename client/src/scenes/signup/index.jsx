import React, { useEffect, useState } from "react";
import {
  TextField,
  Button,
  Container,
  Paper,
  Typography,
  Avatar,
  Box,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import logo from "assets/typo.png";
import { useRegisterUserMutation } from "state/api";
import { useDispatch } from "react-redux";
import { setUser } from "state";
import { useNavigate } from "react-router-dom";
import back from "assets/work.jpg";
import analysis from "assets/analysis.jpg";
import onetoone from "assets/onetoone.jpg";
import ai from "assets/ai.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { useTheme } from "@emotion/react";
import { toast } from "react-toastify";

const CreateAccountPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const theme = useTheme();
  const [registerUser, { isLoading, isError, isSuccess, data }] =
    useRegisterUserMutation();
  const notify = (msg) => {
    toast.success(msg);
  };
  useEffect(() => {
    console.log("result", data);
    if (data && !data.error) {
      const userId = data.savedUser._doc._id;
      console.log("id", userId);
      dispatch(setUser({ user: data.savedUser._doc }));
      notify("successfully registered!");
      navigate("/");
    }
  }, [data]);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  function isValidEmail(email) {
    const pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return pattern.test(email);
  }

  const handleSubmit = (event) => {
    // Handle form submission logic here (e.g., send data to the server)
    event.preventDefault();
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Password:", password);
    if (name.length < 3) {
      setErrorMsg("Name must be atleast 3 characters long!");
      return;
    } else if (!isValidEmail(email)) {
      setErrorMsg("Invalid Email!");
      return;
    } else if (password.length < 8) {
      setErrorMsg("Password must be atleast 8 characters long!");
      return;
    } else {
      setErrorMsg("");
      registerUser({
        name,
        email,
        password,
      });
    }
  };

  return (
    <Box
      width="100%"
      display="flex"
      height="100vh"
      flexDirection="row"
      justifyContent="center"
      alignItems="center"
      gap="60px"
      sx={{ backgroundImage: "linear-gradient(##fcfcfc, #eeeeff)" }}
    >
      <Box
        width="80%"
        maxWidth={"980px"}
        height="86vh"
        display="flex"
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
      >
        <Box
          width="50%"
          sx={{ background: "black", height: "100%", overflow: "hidden" }}
        >
          <Carousel
            showArrows={false}
            showStatus={false}
            showIndicators={false}
            autoPlay={true}
            infiniteLoop={true}
            interval={"5000"}
            showThumbs={false}
          >
            <div>
              <img
                src={onetoone}
                alt="i1"
                style={{
                  height: "86vh",
                  objectFit: "cover",
                  overflow: "hidden",
                }}
              />
              <p
                className="legend"
                style={{
                  fontSize: "22px",
                  background: `${theme.palette.secondary.main}`,
                  opacity: ".9",
                  border: "1px solid #ccc",
                }}
              >
                One to One Counselling
              </p>
            </div>
            <div style={{ height: "86vh" }}>
              <img
                src={ai}
                alt="i1"
                style={{ height: "86vh", objectFit: "cover" }}
              />
              <p
                className="legend"
                style={{
                  fontSize: "22px",
                  background: `${theme.palette.secondary.main}`,
                  opacity: ".9",
                  border: "1px solid #ccc",
                }}
              >
                Get AI Generated Result
              </p>
            </div>
            <div>
              <img
                src={analysis}
                alt="i1"
                style={{ height: "86vh", objectFit: "cover" }}
              />
              <p
                className="legend"
                style={{
                  fontSize: "22px",
                  background: `${theme.palette.secondary.main}`,
                  opacity: ".9",
                  border: "1px solid #ccc",
                }}
              >
                Full Analysis of your Interview
              </p>
            </div>
          </Carousel>
        </Box>
        <Box width="50%" sx={{ height: "100%" }}>
          <Paper
            elevation={3}
            style={{
              position: "relative",
              height: "100%",
              padding: "0px 40px",
            }}
          >
            <Box display="flex" flexDirection="row" justifyContent="center">
              <Box
                component="img"
                src={logo}
                alt="verdict"
                width="40%"
                marginTop="60px"
                marginBottom={"10px"}
                sx={{ mx: "auto" }}
              />
            </Box>
            <Typography variant="h6" align="center">
              Welcome to Verdict
            </Typography>
            <Typography align="center" gutterBottom>
              Please Enter Your Credentials to Continue
            </Typography>
            <Typography sx={{ color: "red" }}>
              {data && <Box>{data.message}</Box>}
              {errorMsg}
            </Typography>
            {/* {isError && <div>User Already registered</div>}
        {isSuccess && <div>Successfully registered </div>} */}
            {/* {data && !isLoad && <>{data.error.data.message}</>} */}
            <form onSubmit={handleSubmit}>
              <TextField
                label="Name"
                fullWidth
                variant="outlined"
                margin="normal"
                value={name}
                onChange={handleNameChange}
              />
              <TextField
                label="Email"
                fullWidth
                variant="outlined"
                margin="normal"
                value={email}
                onChange={handleEmailChange}
              />
              <TextField
                label="Password"
                fullWidth
                variant="outlined"
                margin="normal"
                type="password"
                value={password}
                onChange={handlePasswordChange}
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                style={{
                  padding: "10px 0px",
                  textTransform: "none",
                  marginTop: "20px",
                }}
                disabled={isLoading}
              >
                Create Account
              </Button>
            </form>
            <Box textAlign="center">
              <Button
                variant="text"
                sx={{
                  color: "blue",
                  mt: "8px",
                  mb: "6px",
                  textTransform: "none",
                }}
                onClick={() => {
                  navigate("/log");
                }}
              >
                Already have an account? Log In
              </Button>
              <Typography
                sx={{ color: "#808080", fontSize: "12px", mt: "12px" }}
              >
                Terms and Conditions
              </Typography>
            </Box>
          </Paper>
        </Box>
      </Box>
    </Box>
  );
};

export default CreateAccountPage;
