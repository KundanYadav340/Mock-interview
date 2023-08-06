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
import back from "assets/back.svg";

const CreateAccountPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [registerUser, { isLoading, isError, isSuccess, data }] =
    useRegisterUserMutation();

  useEffect(() => {
    console.log("result", data);
    if (data && !data.error) {
      const userId = data.savedUser._doc._id;
      console.log("id", userId);
      dispatch(setUser({ user: data.savedUser._doc }));
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

  const handleSubmit = (event) => {
    // Handle form submission logic here (e.g., send data to the server)
    event.preventDefault();
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Password:", password);
    registerUser({
      name,
      email,
      password,
    });
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
    >
      <Box width="40%">
        <Box
          component="img"
          src={back}
          alt="filler"
          width="100%"
          sx={{ objectFit: "cover" }}
        />
      </Box>
      <Box width="30%">
        <Paper
          elevation={3}
          style={{
            padding: "30px",
            marginTop: "40px",
            position: "relative",
            minHeight: "70vh",
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
            Create Account
          </Typography>
          {data && <Box>{data.message}</Box>}
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
            <Button type="submit" variant="contained" color="primary" fullWidth>
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
            <Typography sx={{ color: "#808080", fontSize: "12px", mt: "12px" }}>
              Terms and Conditions
            </Typography>
          </Box>
        </Paper>
      </Box>
    </Box>
  );
};

export default CreateAccountPage;
