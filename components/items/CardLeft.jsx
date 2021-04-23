import React from "react";

const CardLeft = ({ title, img, content }) => {

  const type = Math.floor(Math.random() * (2 - 0)) + 0; 


  return (
    <>
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
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
              totam, odit at magni illum vitae reiciendis eum autem vero, magnam
              quam dicta quibusdam ratione nulla ad quasi, eligendi sunt
              voluptates? Lorem ipsum dolor sit amet consectetur adipisicing
              elit.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardLeft;
