import React, { Fragment, useContext, useEffect } from "react";
//import ReservaItem from "./ReservaItem";
import ReservaContext from "../../Context/reserva/reservaContext";
// import ReservaCriarForm from "./ReservaCriarForm";
// import PlantaUnidade from "./PlantaUnidade";
import SvgComponent from "../Spot/Spots";
import DiasDisp from "./diasAbertos";
import InputSlider from "./inputSlider";

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
      <h1 style={{ paddingTop: "20px" }}>Reservas</h1>

      <div className="container">
        <div className="row">
          <div className="col-md-4" id="sidebar">
            <div className="card shadow-sm rounded bg-light my-3 p-2">
              <div id="diasdisp">
                <DiasDisp />
              </div>
              <div id="inputslider">
                <InputSlider />
              </div>
              <div style={{ margin: "0 auto" }}>
                <SvgComponent />
              </div>
            </div>
          </div>
          <div className="col-md-8" id="mainpane">
            <div className="card shadow-sm rounded bg-light my-3 p-2">
              Main Pane
            </div>
          </div>
        </div>
      </div>

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
    </Fragment>
  );
};

export default Reservas;
