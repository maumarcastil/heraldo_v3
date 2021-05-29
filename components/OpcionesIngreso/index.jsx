import React from "react";

const OpcionesIngreso = () => {
  return (
    <>
      <div className="position-relative">
        <div className="position-absolute top-0 end-0 bg-danger p-2">
          <a
            href="/administrador/Login"
            className="text-decoration-none text-light"
          >
            Ingresar
          </a>

          <label className="text-light">&nbsp;-&nbsp;</label>
          <a
            href="/administrador/Register"
            className="text-decoration-none text-light"
          >
            Registrarse
          </a>
        </div>
      </div>
    </>
  );
};

export default OpcionesIngreso;
