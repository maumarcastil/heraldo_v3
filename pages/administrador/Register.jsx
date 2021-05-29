import React, { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Spinner from "components/Spinner";
import { useRouter } from "next/router";
import Header from "components/Header";
import Error from "components/Error";
import { registerUser } from "utils/auth";
//Impor data
import { section1, section2 } from "data/info";

export default function Home() {
  const router = useRouter();

  const [user, setUser] = useState(undefined);
  const [spinner, setSpinner] = useState(true);
  const [error, setError] = useState(false);
  const [data, setData] = useState({
    nombre: "",
    direccion: "",
    telefono: "",
    usuario: "",
    contrasena: "",
    correo: "",
  });
  const { nombre, direccion, telefono, usuario, contrasena, correo } = data;

  useEffect(() => {
    const isLoggedIn = () => {
      if (localStorage.getItem("user")) {
        setUser(JSON.parse(localStorage.getItem("user")));
      }
      setTimeout(() => {
        setSpinner(false);
      }, 2000);
    };
    isLoggedIn();
  }, [user, router]);

  useEffect(() => {
    user === false && setSpinner(false);
    user && router.replace("/administrador/Panel");
  }, [user]);

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (usuario.trim() === "" || contrasena.trim() === "") {
      setError(true);
      return;
    }
    setError(false);

    registerUser(data, setUser);

    setData({
      nombre: "",
      direccion: "",
      telefono: "",
      usuario: "",
      contrasena: "",
      correo: "",
    });
  };

  return (
    <>
      {spinner ? <Spinner /> : null}
      <div className="container">
        <Header title="el heraldo" options={false} />

        <div className="row d-flex justify-content-center">
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title text-center">Sign in</h5>
                <h5 className="title-red text-center text-danger">
                  EL HERALDO DIGITAL
                </h5>
                <h6 className="card-subtitle mb-2 text-center text-muted">
                  Complete the following information:
                </h6>
                {error ? <Error message={true} /> : null}
                <form onSubmit={handleSubmit} autoComplete="off">
                  <TextField
                    id="standard-basic"
                    label="Full Name"
                    name="nombre"
                    onChange={handleChange}
                    value={nombre}
                  />
                  <div className="form-group mb-3"></div>
                  <div className="form-group mb-3">
                    <TextField
                      id="standard-basic"
                      label="Address"
                      name="direccion"
                      onChange={handleChange}
                      value={direccion}
                    />
                  </div>
                  <div className="form-group mb-3">
                    <TextField
                      id="standard-basic"
                      label="Phone"
                      name="telefono"
                      onChange={handleChange}
                      value={telefono}
                    />
                  </div>
                  <div className="form-group mb-3">
                    <TextField
                      id="standard-basic"
                      type="text"
                      label="Username"
                      name="usuario"
                      onChange={handleChange}
                      value={usuario}
                    />
                  </div>
                  <div className="form-group mb-3">
                    <TextField
                      id="standard-basic"
                      type="password"
                      label="Password"
                      name="contrasena"
                      onChange={handleChange}
                      value={contrasena}
                    />
                  </div>
                  <div className="form-group mb-3">
                    <TextField
                      id="standard-basic"
                      label="Email"
                      name="correo"
                      onChange={handleChange}
                      value={correo}
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="contained"
                    className="d-block mx-auto mw-296"
                    color="secondary"
                  >
                    Sign in
                  </Button>
                </form>

                <a
                  href="/administrador/Login"
                  className="text-center d-block mx-auto mt-3"
                >
                  I already have an account
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
