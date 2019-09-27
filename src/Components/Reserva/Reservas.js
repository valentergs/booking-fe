import React, { Fragment, useContext, useEffect } from "react";
import ReservaItem from "./ReservaItem";
import ReservaContext from "../../Context/reserva/reservaContext";

const Reservas = () => {
  const reservaCtx = useContext(ReservaContext);
  const { reservaState, chamarReserva } = reservaCtx;

  useEffect(() => {
    chamarReserva();
    // eslint-disable-next-line
  }, []);

  return (
    <Fragment>
      <div className="container">
        <div className="row">
          <div className="col-md-10">
            {reservaState.map(reserva => (
              <div key={reserva.reserva_id}>
                <ReservaItem reserva={reserva} />
              </div>
            ))}
          </div>
          <div className="col-md-2">Formulário para criação da Reserva</div>
        </div>
      </div>
    </Fragment>
  );
};

export default Reservas;
