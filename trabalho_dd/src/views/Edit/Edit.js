import * as React from "react";
import { Box, Button, TextField, Typography } from "@mui/material";

import ArrowCircleLeftOutlinedIcon from "@mui/icons-material/ArrowCircleLeftOutlined";

import "./Edit.css";

const Home = () => {
  return (
    <>
      <Box className="container">
        <Box className="formBox">
          <Typography variant="h5" textAlign="center">
            Edição de Personagem
          </Typography>
          <form className="form">
            <TextField
              style={{ width: "300px" }}
              type="text"
              label="Nome"
              variant="outlined"
              required
            />
            <br />
            <TextField
              style={{ width: "300px" }}
              type="text"
              label="Classe"
              variant="outlined"
              required
            />
            <br />
            <TextField
              style={{ width: "300px" }}
              type="number"
              label="Level"
              variant="outlined"
              required
            />
            <br />
            <TextField
              style={{ width: "300px" }}
              type="text"
              label="Raça"
              variant="outlined"
              required
            />
            <br />
            <TextField
              style={{ width: "300px" }}
              type="number"
              label="Vida"
              variant="outlined"
              required
            />
            <br />
            <TextField
              style={{ width: "300px" }}
              type="number"
              label="Força"
              variant="outlined"
              required
            />
            <br />
            <TextField
              style={{ width: "300px" }}
              type="number"
              label="Destreza"
              variant="outlined"
              required
            />
            <br />

            <TextField
              style={{ width: "300px" }}
              type="number"
              label="Inteligência"
              variant="outlined"
              required
            />
            <br />

            <TextField
              style={{ width: "300px" }}
              type="number"
              label="Sabedoria"
              variant="outlined"
              required
            />
            <br />

            <TextField
              style={{ width: "300px" }}
              type="number"
              label="Carisma"
              variant="outlined"
              required
            />
            <br />
            <Box>
              <Button href="/home" className="button">
                <ArrowCircleLeftOutlinedIcon
                  className="icon"
                  fontSize="string"
                />
              </Button>
              <Button variant="contained" className="buttonSave" type="submit">
                save
              </Button>
            </Box>
          </form>
        </Box>
      </Box>
    </>
  );
};

export default Home;
