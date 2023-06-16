import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";

import ArrowCircleLeftOutlinedIcon from "@mui/icons-material/ArrowCircleLeftOutlined";

import "./Edit.css";

const Edit = ({ fichas }) => {
  const initialFormState = {
    nome: "",
    nivel: "",
    classe: "",
    raca: "",
    pontosDeVida: "",
    forca: "",
    destreza: "",
    descricao: "",
    inteligencia: "",
    sabedoria: "",
    carisma: "",
  };

  const [ficha, setFicha] = useState(initialFormState);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (id !== "new") {
      fetch(`http://localhost:8080/fichas/${id}`)
        .then((response) => response.json())
        .then((data) => setFicha(data));
    }
  }, [id, setFicha]);

  const handleChange = (event) => {
    setFicha({ ...ficha, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    await fetch(
      `http://localhost:8080/fichas${ficha.id ? `/${ficha.id}` : ""}`,
      {
        method: ficha.id ? "PUT" : "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(ficha),
      }
      //console.log(ficha)
    );
    setFicha(initialFormState);
    navigate("/fichas");
  };

  const title = <h2>{ficha.id ? "Editar Ficha" : "Criar Ficha"}</h2>;

  return (
    <>
      <Box className="container">
        <Box className="formBox">
          <Typography variant="h5" textAlign="center">
            {title}
          </Typography>
          <form className="form" onSubmit={handleSubmit}>
            <Grid container item XS={12} spacing={2}>
              <Grid item xs={6}>
                <TextField
                  name="nome"
                  type="text"
                  label="Nome"
                  variant="outlined"
                  value={ficha.nome || ""}
                  onChange={handleChange}
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  name="classe"
                  type="text"
                  label="Classe"
                  variant="outlined"
                  value={ficha.classe || ""}
                  onChange={handleChange}
                  fullWidth
                  required
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  name="descricao"
                  type="text"
                  label="Descrição"
                  variant="outlined"
                  value={ficha.descricao || ""}
                  onChange={handleChange}
                  multiline
                  fullWidth
                  required
                />
              </Grid>

              <Grid item xs={6}>
                <TextField
                  name="nivel"
                  type="number"
                  label="Level"
                  variant="outlined"
                  value={ficha.nivel || ""}
                  onChange={handleChange}
                  fullWidth
                  required
                />
              </Grid>

              <Grid item xs={6}>
                <TextField
                  name="raca"
                  type="text"
                  label="Raça"
                  variant="outlined"
                  value={ficha.raca || ""}
                  onChange={handleChange}
                  fullWidth
                  required
                />
              </Grid>

              <Grid item xs={6}>
                <TextField
                  name="pontosDeVida"
                  type="number"
                  label="Vida"
                  variant="outlined"
                  value={ficha.pontosDeVida || ""}
                  onChange={handleChange}
                  fullWidth
                  required
                />
              </Grid>

              <Grid item xs={6}>
                <TextField
                  name="forca"
                  type="number"
                  label="Força"
                  variant="outlined"
                  value={ficha.forca || ""}
                  onChange={handleChange}
                  fullWidth
                  required
                />
              </Grid>

              <Grid item xs={6}>
                <TextField
                  name="destreza"
                  type="number"
                  label="Destreza"
                  variant="outlined"
                  value={ficha.destreza || ""}
                  onChange={handleChange}
                  fullWidth
                  required
                />
              </Grid>

              <Grid item xs={6}>
                <TextField
                  name="inteligencia"
                  type="number"
                  label="Inteligência"
                  variant="outlined"
                  value={ficha.inteligencia || ""}
                  onChange={handleChange}
                  fullWidth
                  required
                />
              </Grid>

              <Grid item xs={6}>
                <TextField
                  name="sabedoria"
                  type="number"
                  label="Sabedoria"
                  variant="outlined"
                  value={ficha.sabedoria || ""}
                  onChange={handleChange}
                  fullWidth
                  required
                />
              </Grid>

              <Grid item xs={6}>
                <TextField
                  name="carisma"
                  type="number"
                  label="Carisma"
                  variant="outlined"
                  value={ficha.carisma || ""}
                  onChange={handleChange}
                  fullWidth
                  required
                />
              </Grid>
            </Grid>

            <Box>
              <Button href="/fichas/" className="button">
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

export default Edit;
