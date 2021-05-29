import React, { useState, useEffect } from "react";
import Header from "components/Header";
import Footer from "components/Footer";
import OpcionesIngreso from "components/OpcionesIngreso";
import Spinner from "components/Spinner";
import { getAllNotices } from "utils/notices";
import Noticia from "components/Notice";

export default function Home() {
  const [noticia, setNoticia] = useState();
  const [spinner, setSpinner] = useState(true);

  useEffect(async () => {
    getAllNotices(setNoticia);
    setTimeout(() => {
      setSpinner(false);
    }, 2000);
    console.log(noticia);
  }, []);

  return (
    <>
      {spinner ? (
        <Spinner />
      ) : (
        <div className="container">
          <OpcionesIngreso />
          <Header title="el heraldo" options={true} />
          <br />
          <br />

          {/* seccion 1 */}
          <div className="row">
            <div className="col-md-3">
              <h5>Deportes</h5>
              {noticia
                .filter(
                  (not) =>
                    not.categoria === "deportes" || not.categoria === "Deportes"
                )
                .map((not) => (
                  <Noticia data={not} key={not._id} />
                ))}
            </div>

            <div className="col-md-6 ">
              <h5>Judiciales</h5>
              {noticia
                .filter(
                  (not) =>
                    not.categoria === "judicial" || not.categoria === "Judicial"
                )
                .map((not) => (
                  <Noticia data={not} key={not._id} />
                ))}
            </div>

            <div className="col-md-3">
              <h5>Economia</h5>
              {noticia
                .filter(
                  (not) =>
                    not.categoria === "economia" || not.categoria === "Economia"
                )
                .map((not) => (
                  <Noticia data={not} key={not._id} />
                ))}
            </div>
          </div>
          <br />

          <div className="row">
            <div className="col-md-3">
              <h5>Sociales</h5>
              {noticia
                .filter(
                  (not) =>
                    not.categoria === "sociales" || not.categoria === "Sociales"
                )
                .map((not) => (
                  <Noticia data={not} key={not._id} />
                ))}
            </div>

            <div className="col-md-6 ">
              <h5>Politica</h5>
              {noticia
                .filter(
                  (not) =>
                    not.categoria === "politica" || not.categoria === "Politica"
                )
                .map((not) => (
                  <Noticia data={not} key={not._id} />
                ))}
            </div>

            <div className="col-md-3">
              <h5>Salud</h5>
              {noticia
                .filter(
                  (not) =>
                    not.categoria === "salud" || not.categoria === "Salud"
                )
                .map((not) => (
                  <Noticia data={not} key={not._id} />
                ))}
            </div>
          </div>

          <Footer />
        </div>
      )}
      <style jsx global>{`
        p {
          text-align: justify;
        }
      `}</style>
    </>
  );
}
