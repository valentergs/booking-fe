import React, { Fragment, useContext, useEffect, useState } from "react";
import ReservaItem from "./ReservaItem";
import ReservaContext from "../../Context/reserva/reservaContext";
import ReservaCriarForm from "./ReservaCriarForm";
import PlantaUnidade from "./PlantaUnidade";

const Reservas = () => {
  const reservaCtx = useContext(ReservaContext);
  const { reservaState, chamarReserva, selecionado } = reservaCtx;

  useEffect(() => {
    chamarReserva();
    // eslint-disable-next-line
  }, []);

  const addDefaultSrc = e => {
    e.target.src = "../../assets/spotImages/fam.jpg";
  };

  return (
    <Fragment>
      <div className="container">
        <div className="row p-3">
          <div className="col-md-12 p-3">Colocar formulário de filtro</div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <ReservaCriarForm />
          </div>
        </div>
        <div className="row">
          <div className="col-md-5">
            <PlantaUnidade />
          </div>
          <div className="col-md-7">
            <div className="row">
              <div className="col-md-9">
                {selecionado === null ? (
                  <p>Selecione algum spot</p>
                ) : (
                  <div>
                    {selecionado.bloqueado === true ||
                    selecionado.livre === false ? (
                      <p>Esse spot não está disponivel no momento.</p>
                    ) : (
                      <div>
                        <p>{selecionado.tipo}</p>
                        <p>{selecionado.preco}</p>
                      </div>
                    )}
                  </div>
                )}
              </div>
              <div className="col-md-3">
                {selecionado === null ? (
                  <img
                    src={require(`../../assets/spotImages/fam.jpg`)}
                    alt="imgA"
                    style={{ width: "200px", height: "187px" }}
                  />
                ) : (
                  <img
                    src={require(`../../assets/spotImages/${selecionado.spot_id}.png`)}
                    alt="imgA"
                    onError={addDefaultSrc}
                    style={{ width: "200px", height: "150px" }}
                  />
                )}
              </div>
            </div>
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
