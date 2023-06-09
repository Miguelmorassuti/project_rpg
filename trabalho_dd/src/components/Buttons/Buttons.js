import React from "react";
import { Box, Button } from "@mui/material";

import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import ArrowCircleLeftOutlinedIcon from "@mui/icons-material/ArrowCircleLeftOutlined";

import "./Buttons.css";

const Buttons = () => {
  return (
    <Box
      color="white"
      height="100px"
      display="flex"
      justifyContent="space-around"
      marginTop="20px"
    >
      <ArrowCircleLeftOutlinedIcon className="icon" fontSize="string" />
      <Button className="editButton" variant="contained" href="/edit">
        EDITAR FICHA
      </Button>
      <ArrowCircleRightOutlinedIcon className="icon" fontSize="string" />
    </Box>
  );
};

export default Buttons;
