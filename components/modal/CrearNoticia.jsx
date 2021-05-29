import React from "react";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import TextField from "@material-ui/core/TextField";

const ModalCrear = () => {
  return (
    <>
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
                <TextField id="nameNews" label="Name of the news" />
              </div>
              <div className="form-group mb-3 w-100">
                <TextField
                  id="descriptionNews"
                  label="Description of the news"
                />
              </div>
              <div className="form-group mb-3 w-100">
                <TextField id="nameJournalist" label="Name of the journalist" />
              </div>
              <div className="form-group mb-3 w-100">
                <Select
                  label="Name of the journalist"
                  labelId="demo-simple-select-label"
                  id="visiable"
                >
                  <MenuItem value="si">Si</MenuItem>
                  <MenuItem value="no">No</MenuItem>
                </Select>
              </div>
              <div className="form-group mb-3 w-100">
                <Select labelId="demo-simple-select-label" id="Categoria">
                  <MenuItem value="Deportes">Deportes</MenuItem>
                  <MenuItem value="Judicial">Judicial</MenuItem>
                  <MenuItem value="Economia">Economia</MenuItem>
                  <MenuItem value="Sociales">Sociales</MenuItem>
                  <MenuItem value="Salud">Salud</MenuItem>
                  <MenuItem value="Politica">Politica</MenuItem>
                </Select>
              </div>
              <div className="form-group mb-3 w-100">
                <TextField id="img" label="Url image" />
              </div>
              <div className="form-group mb-3 w-100">
                <TextField id="resume" label="Resume" />
              </div>
            </div>
          </div>
        </Fade>
      </Modal>
    </>
  );
};

export default ModalCrear;
