import Head from "next/head";
import React, { useState } from "react";

const Error = ({ message }) => {
  if (message === true) {
    message = "Todos los campos son requeridos";
  }
  return (
    <>
      <div className="alert alert-danger">
        {message}
      </div>
    </>
  );
};

export default Error;
