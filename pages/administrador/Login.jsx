import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Header from "components/Header";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Error from "components/Error";
import { loginUser } from "utils/auth";
import Spinner from "components/Spinner";

//Impor data

const Login = () => {
  const router = useRouter();

  const [user, setUser] = useState(undefined);
  const [spinner, setSpinner] = useState(true);
  const [error, setError] = useState(false);
  const [data, setData] = useState({
    usuario: "",
    contrasena: "",
  });
  const { usuario, contrasena } = data;

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("se esta enviando ");

    if (usuario.trim() === "" || contrasena.trim() === "") {
      setError(true);
      return;
    }
    setError(false);

    loginUser(data, setUser);

    setData({
      usuario: "",
      contrasena: "",
    });
  };

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

  return (
    <>
      {spinner ? <Spinner /> : null}
      <div className="container">
        <Header title="el heraldo" options={false} />

        <div className="row d-flex justify-content-center">
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title text-center">Welcome to</h5>
                <h5 className="title-red text-center text-danger">
                  EL HERALDO DIGITAL
                </h5>
                <h6 className="card-subtitle mb-2 text-center text-muted">
                  If you already have an account, log in with your email and
                  password.
                </h6>
                {error ? <Error message={true} /> : null}
                <form onSubmit={handleSubmit}>
                  <div className="form-group mb-3">
                    <TextField
                      id="standard-basic"
                      label="User"
                      name="usuario"
                      onChange={handleChange}
                      value={usuario}
                    />
                  </div>
                  <div className="form-group mb-3">
                    <TextField
                      id="standard-basic"
                      type="contrasena"
                      label="contrasena"
                      name="contrasena"
                      value={contrasena}
                      onChange={handleChange}
                    />
                  </div>
                  <Button
                    type="submit"
                    variant="contained"
                    className="d-block mx-auto mw-296"
                    color="secondary"
                  >
                    Log In
                  </Button>
                </form>

                <a
                  href="/administrador/Register"
                  className="text-center d-block mx-auto mt-3"
                >
                  Create an account
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
