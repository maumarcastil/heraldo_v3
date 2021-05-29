import Head from "next/head";
import React from "react";

const Noticia = ({ data }) => {
  console.log(data);
  return (
    <>
      <a href="" className="text-decoration-none text-dark mb-3">
        <img src={data.imagen} className="card-img-top" />

        <div className="card-body px-0">
          <h5 className="card-title">{data.nombre}</h5>
          <p className="card-text my-0 limit-text">{data.descripcion}</p>
          <small className="text-muted"> {Date(data.createdAt)}</small>
        </div>
      </a>
    </>
  );
};

export default Noticia;
