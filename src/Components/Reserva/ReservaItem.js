import React, { Fragment } from "react";

const ReservaItem = ({ reserva }) => {
  const { nome, sobrenome, unidade, tipo, hora_inicio } = reserva;

  return (
    <Fragment>
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            {nome} {"  "}
            {sobrenome}
          </div>
          <div className="col-md-3">{unidade}</div>
          <div className="col-md-3">{tipo}</div>
          <div className="col-md-3">{hora_inicio}</div>
        </div>
      </div>
    </Fragment>
  );
};

export default ReservaItem;
