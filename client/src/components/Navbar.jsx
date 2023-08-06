import React from "react";
import { useTheme } from "@emotion/react";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  TextField,
  Avatar,
  IconButton,
  InputBase,
  Badge,
  Button,
} from "@mui/material";
import FlexBetween from "./FlexBetween";
import profileImage from "assets/profile.png";
import { Notifications, SearchOffOutlined } from "@mui/icons-material";
import { AccountCircle } from "@mui/icons-material";
import { Search } from "@mui/icons-material";
import typo from "assets/typo.png";
import { useDispatch } from "react-redux";
import { setUser } from "state";
import { useNavigate } from "react-router-dom";
import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector";

const Navbar = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.global.user);
  const handleAccount = () => {
    dispatch(setUser({ user: null }));
    navigate("/log", { replace: true });
  };
  return (
    <AppBar
      sx={{
        background: "white",
        pr: "4%",
        pl: "4%",
        borderBottom: `1px solid ${theme.palette.grey.main[100]}`,
        boxShadow: "1px 2px 8px #dfdfdf",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {/* left */}
        <FlexBetween>
          <Box
            component="img"
            alt="logo"
            src={typo}
            // width="40px"
            height="26px"
            sx={{ borderRadius: "0%", objectFit: "cover" }}
          ></Box>
          {/* <Typography variant="h5" ml="10px" color={theme.palette.secondary.main} fontWeight="bold">
                        VISION
                    </Typography> */}
          <FlexBetween ml="50px">
            <Typography
              variant="subtitle2"
              ml="20px"
              color={theme.palette.secondary.main}
            >
              HOME
            </Typography>
            <Typography
              variant="subtitle2"
              ml="20px"
              color={theme.palette.secondary.main}
              onClick={() => {
                navigate("/");
              }}
            >
              INTERVIEWS
            </Typography>
            <Typography
              variant="subtitle2"
              ml="20px"
              color={theme.palette.secondary.main}
              onClick={() => {
                navigate("/result");
              }}
            >
              RESULT
            </Typography>
          </FlexBetween>
        </FlexBetween>
        {/* middle */}
        <FlexBetween
          borderRadius="6px"
          p="0px"
          gap="10px"
          pl="12px"
          sx={{
            background: `${theme.palette.grey.main[100]}`,
            border: `1px solid ${theme.palette.grey.main[200]}`,
          }}
        >
          <InputBase placeholder="Search..." sx={{ width: "280px" }} />
          <IconButton>
            <Search sx={{ fontSize: "25px" }} />
          </IconButton>
        </FlexBetween>
        {/* right */}
        <FlexBetween gap="15px">
          {!user && (
            <Button
              variant="contained"
              color="primary"
              size="small"
              sx={{ textTransform: "none" }}
              onClick={() => {
                navigate("/log");
              }}
            >
              Sign In
            </Button>
          )}
          <IconButton>
            <Badge badgeContent={4} color="primary">
              <Notifications sx={{ color: theme.palette.secondary.main }} />
            </Badge>
          </IconButton>
          <IconButton>
            <AccountCircle
              sx={{ fontSize: "32px", color: theme.palette.secondary.main }}
              onClick={handleAccount}
            />
          </IconButton>
        </FlexBetween>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
