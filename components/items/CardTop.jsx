import React from "react";

const CardTop = ({ title, img, content }) => {
  return (
    <>
      <div className="col-sm-6 pb-2">
        {title ? <h3>{title}</h3> : null}
        <div>
          <img className="card-img" src={img} alt="" />
        </div>
        <p>{content}</p>
      </div>
    </>
  );
};

export default CardTop;
