import React, { Fragment, useContext, useEffect } from "react";
import UsuarioItem from "./UsuarioItem";
import UsuarioFilter from "./UsuariosFilter";
import AddUsuarioForm from "./AddUsuarioForm";
import UpdateUsuarioForm from "./UpdateUsuarioForm";
import VAContext from "../../Context/vacaamarela/vaContext";

const Usuarios = () => {
  const vaContext = useContext(VAContext);
  const { usuarioState, getUsuarios, filtered, current } = vaContext;

  useEffect(() => {
    getUsuarios();
    // eslint-disable-next-line
  }, []);

  if (usuarioState !== null && usuarioState.length === 0) {
    return (
      <h4 style={{ margin: "20px" }}>
        Não há usuários disponiveis no momento.
      </h4>
    );
  }

  return (
    <Fragment>
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <UsuarioFilter />
            {filtered !== null
              ? filtered.map(usuario => (
                  <div key={usuario.usuario_id}>
                    <UsuarioItem usuario={usuario} />
                  </div>
                ))
              : usuarioState.map(usuario => (
                  <div key={usuario.usuario_id}>
                    <UsuarioItem usuario={usuario} />
                  </div>
                ))}
          </div>
          <div className="col-md-4">
            {current ? <UpdateUsuarioForm /> : <AddUsuarioForm />}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Usuarios;
