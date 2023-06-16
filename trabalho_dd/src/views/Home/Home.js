import React, { useEffect, useState } from "react";

import { CardDescription, Header } from "./../../components";
import { Box } from "@mui/material";

import "./Home.css";
import Buttons from "../../components/Buttons/Buttons";

const Home = () => {
  const [fichas, setFichas] = useState([]);
  const [loading, setLoading] = useState([]);

  useEffect(() => {
    setLoading(true);

    fetch("http://localhost:8080/fichas/")
      .then((response) => response.json())
      .then((data) => {
        setFichas(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <Box className="container">
        {fichas.map(ficha =>{
        return(
          <>
           <Header name={ficha.nome}/>
           <CardDescription ficha={ficha}/>
           <Buttons id={ficha.id} name={ficha.nome} />
          </>
        )
      })} 
      </Box>
    </>
  );
};

export default Home;
