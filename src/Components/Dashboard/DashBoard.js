import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import VAContext from "../../Context/vacaamarela/vaContext";

const DashBoard = () => {
  const vaContext = useContext(VAContext);
  const { usuarioState, getUsuarios } = vaContext;

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
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
