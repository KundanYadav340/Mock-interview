import React, { useEffect, useState } from "react";
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
  Select,
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
import SelectDropDown from "./SelectDropDown";

const Navbar = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const pathname = window.location.pathname;
  const pathSegments = pathname.split("/");
  const lastPathSegment = pathSegments[pathSegments.length - 1];
  const user = useSelector((state) => state.global.user);
  // console.log("pathname", lastPathSegment);
  const [active, setActive] = useState(0);
  useEffect(() => {
    // Get the pathname (the part after the domain)
    const pathname = window.location.pathname;
    console.log("Pathname:", pathname);
    if (pathname === "/") {
      setActive(1);
    }
  }, []);
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
              sx={{ cursor: "pointer" }}
            >
              HOME
            </Typography>
            <Typography
              variant="subtitle2"
              ml="20px"
              color={
                active === 1
                  ? theme.palette.primary.main
                  : theme.palette.secondary.main
              }
              onClick={() => {
                navigate("/");
              }}
              sx={{ cursor: "pointer" }}
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
              sx={{
                cursor: "pointer",
                p: "2px 4px",
              }}
            >
              RESULT
            </Typography>
          </FlexBetween>
        </FlexBetween>
        {/* middle */}
        {lastPathSegment === "/home" && (
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
        )}
        {/* right */}
        <FlexBetween gap="15px">
          {lastPathSegment === "" && <SelectDropDown />}
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
