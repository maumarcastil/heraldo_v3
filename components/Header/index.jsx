import React from "react";

const Header = ({ title }) => {
  return (
    <>
      <header>
        <div className="text-center">
          <div className="title p-2">
            <h1 className="text-uppercase text-danger">{title}</h1>
          </div>

          <div className="d-flex row justify-content-around text-uppercase pt-2">
            <div className="col-sm-2">
              <a href="">noticias</a>
            </div>
            <div className="col-sm-2">
              <a href="">judiciales</a>
            </div>
            <div className="col-sm-2">
              <a href="">deportes</a>
            </div>
            <div className="col-sm-2">
              <a href="">clasificados</a>
            </div>
            <div className="col-sm-2">
              <a href="">política</a>
            </div>
          </div>
        </div>

        <div></div>
      </header>

      <style jsx>{`
        header {
          padding-bottom: 5px;
          border-bottom: 3px #dc3545 solid;
        }

        .title {
          border-bottom: 1px #ccc solid;
        }
        a {
          text-decoration: none;
          color: #dc3545;
        }
      `}</style>
    </>
  );
};

export default Header;
