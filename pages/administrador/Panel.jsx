import Header from "components/Header";
import React, { useState } from "react";
import { useRouter } from "next/router";
import Fade from "@material-ui/core/Fade";
import Modal from "@material-ui/core/Modal";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
import Backdrop from "@material-ui/core/Backdrop";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { createNotice } from "utils/notices";
/* import {} from "../../styles/globals.css"; */
export default function Panel() {
  const useStyles = makeStyles((theme) => ({
    modal: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: "2px solid #000",
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const [data, setData] = useState({
    nombre: "",
    descripcion: "",
    nombre_periodista: "",
    visible: true,
    categoria: "",
    hora_noticia: new Date(Date.now()).toISOString(),
    imagen: "",
    resumen: "",
  });
  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  const {
    nombre,
    descripcion,
    nombre_periodista,
    visible,
    categoria,
    imagen,
    resumen,
  } = data;

  const handleClick = () => {
    console.log("Se dio click ");
    if (
      nombre.trim() === "" ||
      descripcion.trim() === "" ||
      nombre_periodista.trim() === "" ||
      categoria.trim() === "" ||
      imagen.trim() === "" ||
      resumen.trim() === ""
    ) {
      return;
    }

    createNotice(data, setOpen);
  };

  const router = useRouter();
  const handleClickSalir = () => {
    localStorage.removeItem("user");
    router.replace("/");
  };

  return (
    <>
      <div className="container">
        <Header title="el heraldo" options={false} />

        <div className="row d-flex justify-content-center align-items-center">
          <div className="w-100 d-flex flex-column">
            <div className="w-100">
              <div className="d-flex justify-content-between">
                <Button
                  type="button"
                  variant="contained"
                  className="mw-296"
                  color="primary"
                  onClick={handleClickSalir}
                >
                  Salir
                </Button>

                <Button
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#modalCrear"
                  variant="contained"
                  className="mw-296"
                  color="secondary"
                  onClick={handleOpen}
                >
                  Create News
                </Button>
              </div>
              <div className="row mt-3 flex-column align-items-center justify-content-center">
                <div className="d-flex px-2 py-2 justify-content-center mw-680 w-100">
                  <div className="d-flex w-100 flex-column justify-content-center mw-680">
                    <p className="text-center mb-1 fw-bold fs-2">Title</p>
                    <p className="mb-1 fw-normal text-center">Description</p>
                    <p className="mb-1 fw-italic text-center">Autor</p>
                    <img
                      src="https://rcdn.rolloid.net/uploads/2017/05/estas-20-fotos-le-alegran-el-dia-a-cualquiera-1495727831.jpe"
                      alt="imagen-noticia"
                      className="mx-auto d-block w-100"
                    />
                    <div className="d-flex justify-content-center w-100 mt-3 flex column">
                      <Button
                        variant="contained"
                        color="primary"
                        className="mx-4"
                      >
                        Editar
                      </Button>
                      <Button
                        variant="contained"
                        color="secondary"
                        className="mx-4"
                      >
                        Eliminar
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={open}
          onClose={handleClose}
          closeAfterTransition
          className={classes.modal}
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open}>
            <div className={classes.paper}>
              <div className="d-flex flex-column justify-content-center align-items-center">
                <h2 className="text-center">Register New News</h2>
                <div className="form-group mb-3 w-100">
                  <TextField
                    id="nameNews"
                    label="Name of the news"
                    name="nombre"
                    value={nombre}
                    onChange={handleChange}
                    maxLength="15"
                  />
                </div>
                <div className="form-group mb-3 w-100">
                  <TextField
                    id="descriptionNews"
                    label="Description of the news"
                    name="descripcion"
                    value={descripcion}
                    onChange={handleChange}
                    maxLength="50"
                  />
                </div>
                <div className="form-group mb-3 w-100">
                  <TextField
                    id="nameJournalist"
                    label="Name of the journalist"
                    name="nombre_periodista"
                    value={nombre_periodista}
                    onChange={handleChange}
                    maxLength="11"
                  />
                </div>
                <div className="form-group mb-3 w-100">
                  <Select
                    label="visible"
                    labelId="demo-simple-select-label"
                    name="visiable"
                    id="visiable"
                    value={visible}
                    onChange={handleChange}
                  >
                    <MenuItem value={true}>Si</MenuItem>
                    <MenuItem value={false}>No</MenuItem>
                  </Select>
                </div>
                <div className="form-group mb-3 w-100">
                  <Select
                    label="Category"
                    labelId="demo-simple-select-label"
                    id="Categoria"
                    name="categoria"
                    value={categoria}
                    onChange={handleChange}
                  >
                    <MenuItem value="deportes">Deportes</MenuItem>
                    <MenuItem value="judicial">Judicial</MenuItem>
                    <MenuItem value="economia">Economia</MenuItem>
                    <MenuItem value="sociales">Sociales</MenuItem>
                    <MenuItem value="salud">Salud</MenuItem>
                    <MenuItem value="politica">Politica</MenuItem>
                  </Select>
                </div>
                <div className="form-group mb-3 w-100">
                  <TextField
                    id="img"
                    label="Url image"
                    name="imagen"
                    value={imagen}
                    onChange={handleChange}
                    maxLength="100"
                  />
                </div>
                <div className="form-group mb-3 w-100">
                  <TextField
                    id="resume"
                    label="Resume"
                    name="resumen"
                    value={resumen}
                    onChange={handleChange}
                    maxLength="100"
                  />
                </div>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleClick}
                >
                  Save
                </Button>
              </div>
            </div>
          </Fade>
        </Modal>
      </div>
    </>
  );
}
