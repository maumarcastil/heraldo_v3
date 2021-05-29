import Link from "next/link";
import Head from "next/head";
import Header from "components/Header";
import Footer from "components/Footer";
import CardTop from "components/items/CardTop";
import CardType from "components/items/CardType";
import OpcionesIngreso from "components/OpcionesIngreso";
//Impor data
import { section1, section2 } from "data/info";

export default function Detalle() {
  return (
    <>
      <div className="container">

        <OpcionesIngreso/>
        <Header title="el heraldo" options={true} />
      <div className="d-flex flex-column mt-3 w-100">
          <h2 className="text-center">
              Titulo generico
          </h2>
        <p className="text-center">
         Descriptcion generica
        </p> 
        <img src="" className="w-100" />
        <div className="w-100 d-flex">

          <p className="me-4">Nombre GENERICO</p>
          <p className="me-4">Visible Si</p>
          <p className="me-4">Fecha</p>

        </div>
        <div className="w-100 d-flex flex-column">
         <p>Categoria</p>
         <p>Hora</p>
         <p>Resument</p>
        </div>
      </div>

        <Footer />
      </div>

      <style jsx global>{`
        p {
          text-align: justify;
        }
      `}</style>
    </>
  );
}
