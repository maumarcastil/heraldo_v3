import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="container">
        <div className="row">
          <div className="col-sm-12">
            <span>
              <strong>PBX: </strong>(57) (5) 3715000{" "}
            </span>
            <span>
              <strong>Línea de atención: </strong>(57) (5) 313-3400 /
              300-910-9968 Calle 53B N° 46 - 25, Barranquilla - Atlántico </span>
            <span>
              <strong>Oficina Bogotá: </strong>Dirección Calle 88 No. 13 A 07 </span>

            <span>
              <strong>Teléfono: </strong>(1) 218 5733
            </span>
          </div>
        </div>
      </footer>

      <style jsx>{`
        footer {
          position: relative;
          bottom: 0;
        }
      `}</style>
    </>
  );
};

export default Footer;
