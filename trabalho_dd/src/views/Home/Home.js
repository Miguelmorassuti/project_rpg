import React from "react";

import { CardDescription, Header } from './../../components'
import { Box, Grid, Typography } from "@mui/material";

import './Home.css'
import Buttons from "../../components/Buttons/Buttons";

const Home = () =>{
  return(
    <>
    <Box className="container">
      <Header name="Dragon"/>
      <CardDescription/>
      <Buttons/>
    </Box>


      {/* <Grid container>
        <Grid item xs={12} justifyContent="center">
          <Box>
            <Typography>NAME</Typography>
          </Box>
        </Grid>
        <Grid item xs={12}>
        <Typography>Ataque</Typography>
        </Grid>
        <Grid item xs={12}>
        <Typography>Defesa</Typography>
        </Grid>
        <Grid item xs={12}>
        <Typography>NAME</Typography>
        </Grid>
      </Grid> */}

      
    </>
  )
}

export default Home