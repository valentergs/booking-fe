import React, { Fragment, useContext, useEffect } from "react";
//import ReservaItem from "./ReservaItem";
import ReservaContext from "../../Context/reserva/reservaContext";
// import ReservaCriarForm from "./ReservaCriarForm";
// import PlantaUnidade from "./PlantaUnidade";
import SvgComponent from "../Spot/Spots";

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
        <div className="row">
          <div className="col-md-4">
            <div
              className="card shadow-sm rounded bg-light my-3 p-2"
              style={{ height: "300px", width: "auto" }}
            >
              <SvgComponent />
            </div>
          </div>
          <div className="col-md-8">
            <div className="card shadow-sm rounded bg-light my-3 p-2">
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
                          <p>R${selecionado.preco.toFixed(2)}</p>
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
                      //style={{ width: "100px", height: "87px" }}
                      className="image-img-fluid img-thumbnail"
                    />
                  ) : (
                    <img
                      src={require(`../../assets/spotImages/${selecionado.spot_id}.png`)}
                      alt="imgA"
                      onError={addDefaultSrc}
                      // style={{ width: "200px", height: "150px" }}
                      className="image-img-fluid img-thumbnail"
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="container">
        <div className="row p-3">
          <div className="col-md-12 p-3">Colocar formulário de filtro</div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <ReservaCriarForm />
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
      </div> */}
    </Fragment>
  );
};

export default Reservas;
