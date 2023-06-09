import React from "react";
import { Box, Grid, Typography } from "@mui/material";

import "./CardDescription.css";

const CardDescription = () => {
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
            <Typography color="black" fontWeight="bold">
              "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
              est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
              velit, sed quia non numquam eius modi tempora incidunt ut labore
              et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima
              veniam , quis nostrum exercitationem ullam corporis suscipit
              laboriosam, nisi ut aliquid ex ea commodi consequatur?vel illum
              qui dolorem eum fugiat quo voluptas nulla pariatur?
            </Typography>

            <Grid
              container
              justifyContent="space-between"
              className="containerSkilsDown"
            >
              <Grid item xs={4} className="skilLine">
                <Typography color="white" fontFamily="'Special Elite', cursive">
                  VIDA: xx
                </Typography>
              </Grid>
              <Grid item xs={4} className="skilLine">
                <Typography color="white" fontFamily="'Special Elite', cursive">
                  FORÇA: xx
                </Typography>
              </Grid>
              <Grid item xs={4} className="skilLine">
                <Typography color="white" fontFamily="'Special Elite', cursive">
                  DESTREZA: xx
                </Typography>
              </Grid>
              <Grid item xs={4} className="skilLine">
                <Typography color="white" fontFamily="'Special Elite', cursive">
                  INTELIGENCIA: xx
                </Typography>
              </Grid>
              <Grid item xs={4} className="skilLine">
                <Typography color="white" fontFamily="'Special Elite', cursive">
                  SABEDORIA: xx
                </Typography>
              </Grid>
              <Grid item xs={4} className="skilLine">
                <Typography color="white" fontFamily="'Special Elite', cursive">
                  CARISMA: xx
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
                Level: xx
              </Typography>
              <Typography fontFamily="'Special Elite', cursive">
                Class: xx
              </Typography>
              <Typography fontFamily="'Special Elite', cursive">
                Raça: xx
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
