import React from "react";
import { Box, Typography } from "@mui/material";

import "./Header.css";

const Header = ({ name }) => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      paddingY={3}
      backgroundColor="#1a1504b7"
      borderRadius={5}
      width="100%"
    >
      <Typography
        variant="h3"
        fontFamily="'Special Elite', cursive"
        className="cardName"
      >
        {name}
      </Typography>
    </Box>
  );
};

export default Header;
