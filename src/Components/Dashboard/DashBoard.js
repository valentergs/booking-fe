import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import VAContext from "../../Context/vacaamarela/vaContext";
import ReservaContext from "../../Context/reserva/reservaContext";

const DashBoard = () => {
  const vaContext = useContext(VAContext);
  const reservaContext = useContext(ReservaContext);
  const { usuarioState, getUsuarios } = vaContext;
  const { reservaState } = reservaContext;

  useEffect(() => {
    getUsuarios();
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <div className="container">
        <div className="row my-3">
          <div className="col-md-4">
            <div className="card shadow">
              <div className="card-header">
                <Link style={{ textDecoration: "none" }} to="/usuarios">
                  <h3>Usuarios</h3>
                </Link>
              </div>
              <div className="card-body">
                Numero de usuarios: {usuarioState.length}
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card shadow">
              <div className="card-header">
                <Link style={{ textDecoration: "none" }} to="/reservas">
                  <h3>Reservas</h3>
                </Link>
              </div>
              <div className="card-body">
                Numero de reservas: {reservaState.length}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
