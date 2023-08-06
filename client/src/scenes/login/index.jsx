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

const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loginUser, { isLoading, isError, isSuccess, data }] =
    useLoginUserMutation();

  useEffect(() => {
    console.log("result", data);
    if (data && !data.error) {
      const userId = data.userData._id;
      console.log("id", userId);
      dispatch(setUser({ user: data.userData }));
      navigate("/");
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
        <Box width="40%">
          <Box
            component="img"
            src={back}
            alt="filler"
            // height="100vh"
            width="100%"
            sx={{ objectFit: "cover" }}
          />
        </Box>
        <Box width="30%">
          <Paper
            elevation={3}
            style={{
              padding: "30px",
              paddingTop: "40px",
              marginTop: "40px",
              position: "relative",
              minHeight: "65vh",
            }}
          >
            <Box display="flex" flexDirection="row" justifyContent="center">
              <Box
                component="img"
                src={logo}
                alt="verdict"
                width="40%"
                sx={{ mx: "auto", my: 2 }}
              />
            </Box>
            <Typography variant="h4" align="center" gutterBottom>
              Welcome Back
            </Typography>
            {data && <Box sx={{ color: "red" }}>* {data.message}</Box>}
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
              <Typography sx={{ color: "#606060" }}>forgot password</Typography>
              <Typography
                sx={{ color: "#808080", fontSize: "12px", mt: "12px" }}
              >
                Terms and Conditions
              </Typography>
            </Box>
          </Paper>
        </Box>
      </Box>
    </>
  );
};

export default Login;
