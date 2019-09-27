import React, { Fragment } from "react";

const ReservaItem = ({ reserva }) => {
  const {
    reserva_id,
    nome,
    sobrenome,
    unidade,
    spot,
    tipo,
    hora_inicio,
    hora_fim
  } = reserva;

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
