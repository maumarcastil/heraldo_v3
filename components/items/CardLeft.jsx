import React from "react";

const CardLeft = ({ title, img, content }) => {
  const type = Math.floor(Math.random() * (2 - 0)) + 0;

  return (
    <>
      <div className="d-flex flex-column mt-3 w-100">
        <div className="d-flex w-100 row">
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-lg-12 d-flex flex-column">
            {/* ESTA ES LA CARD */}
            <div className="d-flex flex-column w-100">
              <h2 className="fz-18 mb-3">Titulo Generico</h2>
              <p className="fz-16 mb-2">lorem</p>
              <img src="" className="w-100" />
              <a className="fz-16">Ver mas informacion</a>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-lg-12">
            <div className="d-flex flex-column w-100">
              <h2 className="fz-18">Titulo Generico</h2>
              <p className="fz-16">lorem</p>
              <img src="" className="w-100" />
              <a className="fz-16">Ver mas informacion</a>
            </div>
          </div>
        </div>
        <div class="d-flex w-100 align-items-center flex-wrap">
          <div className="d-flex flex-column me-3">
            <h2 className="fz-18 mb-3">Titulo Generico</h2>
            <p className="fz-16">lorem</p>
            <img src="" className="w-100" />
            <a className="fz-16 mt-2">Ver mas informacion</a>
          </div>
          <div className="d-flex flex-column me-4">
            <h2 className="fz-18">Titulo Generico</h2>
            <p className="fz-16">lorem</p>
            <img src="" className="w-100" />
            <a className="fz-16">Ver mas informacion</a>
          </div>
        </div>
        <div class="d-flex w-100 flex-wrap">
          <div className="d-flex flex-column w-100">
            <h2 className="fz-18">Titulo Generico</h2>
            <p className="fz-16">lorem</p>
            <img src="" className="w-100" />
            <a className="fz-16">Ver mas informacion</a>
          </div>
        </div>
        <div className="d-flex w-100 row">
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-lg-12">
            <div className="d-flex flex-column w-100">
              <h2 className="fz-18">Titulo Generico</h2>
              <p className="fz-16">lorem</p>
              <img src="" className="w-100" />
              <a className="fz-16">Ver mas informacion</a>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-lg-12">
            <div className="d-flex flex-column w-100">
              <h2 className="fz-18">Titulo Generico</h2>
              <p className="fz-16">lorem</p>
              <img src="" className="w-100" />
              <a className="fz-16">Ver mas informacion</a>
            </div>
          </div>
        </div>
      </div>

      <div className="col-sm pb-4">
        <div className="row g-0">
          <div className="col-md-5">
            <img
              className="card-img"
              src="https://as01.epimg.net/tenis/imagenes/2020/01/16/open_australia/1579157925_360889_1579168493_noticia_normal_recorte1.jpg"
              alt=""
            />
          </div>
          <div className="col-md-7 ps-2">
            <h3>Nueva estrella</h3>
            <p>Hola</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardLeft;
