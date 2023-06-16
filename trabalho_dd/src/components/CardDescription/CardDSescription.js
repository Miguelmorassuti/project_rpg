import React from "react";
import { Box, Grid, Typography } from "@mui/material";

import "./CardDescription.css";

const CardDescription = ({ ficha }) => {
  return (
    <Box className="cardContainer">
      <Grid container height="100%">
        <Grid item xs={10}>
          <Box
            height="100%"
            display="flex"
            justifyContent="space-between"
            flexDirection="column"
          >
            <Typography color="black" fontWeight="bold" variant="h5">
              {ficha.descricao}
            </Typography>

            <Box
              display="flex"
              flexDirection="row"
              justifyContent="space-around"
              alignItems="bottom"
            >
              <Box className="imageDragon"></Box>
              <Box className="imageWarrior"></Box>
            </Box>

            <Grid
              container
              justifyContent="space-between"
              className="containerSkilsDown"
            >
              <Grid item xs={4} className="skilLine">
                <Typography color="white" fontFamily="'Special Elite', cursive">
                  VIDA: {ficha.pontosDeVida}
                </Typography>
              </Grid>
              <Grid item xs={4} className="skilLine">
                <Typography color="white" fontFamily="'Special Elite', cursive">
                  FORÇA: {ficha.forca}
                </Typography>
              </Grid>
              <Grid item xs={4} className="skilLine">
                <Typography color="white" fontFamily="'Special Elite', cursive">
                  DESTREZA: {ficha.destreza}
                </Typography>
              </Grid>
              <Grid item xs={4} className="skilLine">
                <Typography color="white" fontFamily="'Special Elite', cursive">
                  INTELIGENCIA: {ficha.inteligencia}
                </Typography>
              </Grid>
              <Grid item xs={4} className="skilLine">
                <Typography color="white" fontFamily="'Special Elite', cursive">
                  SABEDORIA: {ficha.sabedoria}
                </Typography>
              </Grid>
              <Grid item xs={4} className="skilLine">
                <Typography color="white" fontFamily="'Special Elite', cursive">
                  CARISMA: {ficha.carisma}
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Grid item xs={2} height="100%">
          <Box
            className="skilBar"
            height="100%"
            display="flex"
            flexDirection="column"
            justifyContent="space-around"
          >
            <Box>
              <Typography fontFamily="'Special Elite', cursive">
                Nível: {ficha.nivel}
              </Typography>
              <Typography fontFamily="'Special Elite', cursive">
                Class: {ficha.classe}
              </Typography>
              <Typography fontFamily="'Special Elite', cursive">
                Raça: {ficha.raca}
              </Typography>
            </Box>
            <Typography
              variant="h4"
              className="lyingName"
              fontFamily="'Special Elite', cursive"
            >
              RPG DOS CRIA
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CardDescription;
