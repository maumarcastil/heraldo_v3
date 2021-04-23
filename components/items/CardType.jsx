import React from "react";

const CardType = ({ title, img, content }) => {
  const type = Math.floor(Math.random() * (2 - 0)) + 0;

  return (
    <>
      {type === 0 ? (
        <div className="col-sm pb-4">
          <div className="row g-0">
            <div className="col-md-5">
              <img className="card-img" src={img} alt="" />
            </div>
            <div className="col-md-7 ps-2">
              {title ? <h3>{title}</h3> : null}
              <p>{content}</p>
            </div>
          </div>
        </div>
      ) : (
        <div className="col-sm pb-4">
          <div className="row g-0">
            <div className="col-md-7 ">
              {title ? <h3>{title}</h3> : null}
              <p>{content}</p>
            </div>
            <div className="col-md-5 ps-2">
              <img className="card-img" src={img} alt="" />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CardType;
