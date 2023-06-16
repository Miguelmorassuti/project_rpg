import React from "react";
import { Box, Button, Typography } from "@mui/material";

import "./Welcome.css";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <Box className="containerr">
      <Box className="boxContainer">
        <Typography
          variant="h2"
          className="title"
          fontFamily="'Special Elite', cursive"
          color="#fff"
        >
          Bem Vindo ao Novo Mundo!
        </Typography>

        <Link to="/fichas/">
          <Typography
            variant="h6"
            className="title"
            fontFamily="'Special Elite', cursive"
            color="#fff"
          >
            CLIQUE AQUI PARA VISUALIZAR SEU DECK
          </Typography>
        </Link>
      </Box>
    </Box>
  );
};

export default Welcome;
