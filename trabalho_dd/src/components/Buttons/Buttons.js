import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Slide,
} from "@mui/material";
import { Link } from "react-router-dom";

import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import ArrowCircleLeftOutlinedIcon from "@mui/icons-material/ArrowCircleLeftOutlined";

import "./Buttons.css";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Buttons = (id, name) => {
  const [fichas, setFichas] = useState([]);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  
  console.log(id);
  useEffect(() => {
    setLoading(true);

    fetch("http://localhost:8080/fichas/")
      .then((response) => response.json())
      .then((data) => {
        setFichas(data);
        setLoading(false);
      });
  }, []);

  const remove = async (id) => {
    console.log(id);
    await fetch(`http://localhost:8080/fichas/${id}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }).then(() => {
      let updatedFichas = [...fichas].filter((i) => i.id !== id);
      setFichas(updatedFichas);
    });
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const buttonDialog = () => {
    remove(id.id);
    handleClose();
  };

  return (
    <Box
      color="white"
      height="100px"
      display="flex"
      justifyContent="space-around"
      marginTop="20px"
    >
      <ArrowCircleLeftOutlinedIcon className="icon" fontSize="string" />

      <Link to="/fichas/new" className="link">
        <Button className="editButton" variant="contained">
          CRIAR FICHA
          <Link to="/edit" />
        </Button>
      </Link>

      <Link to={"/fichas/" + id.id} className="link">
        <Button className="editButton" variant="contained">
          EDITAR FICHA
          <Link to="/edit" />
        </Button>
      </Link>

      <Link to="" className="link">
        <Button
          variant="contained"
          onClick={handleClickOpen}
          className="editButton"
        >
          APAGAR FICHA
        </Button>
        <Dialog
          open={open}
          TransitionComponent={Transition}
          keepMounted
          onClose={handleClose}
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle>{`Você esta prestes a apagar à ficha: ${id.name}`}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
              Você está prestes a DELETAR uma ficha, após deletada você perdera
              todos os dados relativos a ela, deseja continuar mesmo assim?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancelar</Button>
            <Link to="/fichas/new">
              <Button onClick={buttonDialog}>Apagar</Button>
            </Link>
          </DialogActions>
        </Dialog>
      </Link>

      <ArrowCircleRightOutlinedIcon className="icon" fontSize="string" />
    </Box>
  );
};

export default Buttons;

