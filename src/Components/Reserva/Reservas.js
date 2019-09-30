import React, { Fragment, useContext, useEffect } from "react";
import ReservaItem from "./ReservaItem";
import ReservaContext from "../../Context/reserva/reservaContext";
import ReservaCriarForm from "./ReservaCriarForm";
import PlantaUnidade from "./PlantaUnidade";

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
        <div className="row p-3">
          <div className="col-md-12 p-3">Colocar formulário de filtro</div>
          <div className="col-md-12">
            <ReservaCriarForm />
          </div>
          <div className="col-md-12">
            <PlantaUnidade />
          </div>
        </div>
        <div className="row p-3">
          <div className="col-md-12">
            {reservaState.map(reserva => (
              <div key={reserva.reserva_id}>
                <ReservaItem reserva={reserva} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Reservas;
