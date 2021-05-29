import React from "react";

const Header = ({ title, options }) => {
  return (
    <>
      {options ? (
        <header className="header">
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
        </header>
      ) : (
        <header>
          <div className="text-center">
            <div className="p-2">
              <h1 className="text-uppercase text-danger">{title}</h1>
            </div>
          </div>
        </header>
      )}

      <style jsx>{`
        .header {
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
        .content-ingreso {
          background-color: #dc3545;
          color: #fff;
        }
      `}</style>
    </>
  );
};

export default Header;