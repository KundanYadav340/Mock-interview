import React, { useEffect, useState } from "react";
import {
  TextField,
  Button,
  Container,
  Paper,
  Typography,
  Avatar,
  Box,
  InputAdornment,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import logo from "assets/typo.png";
import { useLoginUserMutation } from "state/api";
import { useDispatch } from "react-redux";
import { setUser } from "state";
import { useNavigate } from "react-router-dom";
import { Email } from "@mui/icons-material";
import back from "assets/back.svg";
import { toast } from "react-toastify";
import logImage from "assets/work.jpg";

const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loginUser, { isLoading, isError, isSuccess, data }] =
    useLoginUserMutation();
  const notify = (type, msg) => {
    type === "error" ? toast.error(msg) : toast.success(msg);
  };
  useEffect(() => {
    console.log("result", data);
    if (data && !data.error) {
      const userId = data.userData._id;
      console.log("id", userId);
      dispatch(setUser({ user: data.userData }));
      notify("success", "successfully logged in!");
      navigate("/");
    } else if (data) {
      notify("error", data.message);
    }
  }, [data]);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    // Handle form submission logic here (e.g., send data to the server)
    event.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
    loginUser({
      email,
      password,
    });
  };

  return (
    <>
      <Box
        width="100%"
        height="100vh"
        display="flex"
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
        gap="60px"
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
          <Box width="50%" sx={{ background: "black", height: "100%" }}>
            <Box
              component="img"
              src={logImage}
              alt="filler"
              height="100%"
              width="100%"
              sx={{ objectFit: "cover" }}
            />
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
                Welcome Back
              </Typography>
              <Typography align="center" gutterBottom>
                Please Enter Your Credentials to Continue
              </Typography>
              {data && data.error && (
                <Box sx={{ color: "red" }}> {data.message}</Box>
              )}
              {/* {isError && <div>User Already registered</div>}
        {isSuccess && <div>Successfully registered </div>} */}
              {/* {data && !isLoad && <>{data.error.data.message}</>} */}
              <form onSubmit={handleSubmit}>
                <TextField
                  label="Email"
                  fullWidth
                  variant="outlined"
                  margin="normal"
                  value={email}
                  startAdornment={
                    <InputAdornment position="start">$</InputAdornment>
                  }
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
                  Log In
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
                    navigate("/signup");
                  }}
                >
                  Don't have an account? Create one
                </Button>
                <Typography sx={{ color: "#606060" }}>
                  forgot password
                </Typography>
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
    </>
  );
};

export default Login;
