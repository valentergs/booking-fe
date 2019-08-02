import React, { useContext, useState } from "react";
import VAContext from "../../Context/vacaamarela/vaContext";

const UsuarioItem = ({ usuario }) => {
  const vaContext = useContext(VAContext);
  const { delUsuario, setCurrent } = vaContext;

  const {
    usuario_id,
    nome,
    sobrenome,
    email,
    cpf,
    cep,
    endereco,
    cidade,
    estado,
    celular,
    superuser,
    ativo
  } = usuario;

  const onDelete = () => {
    delUsuario(usuario_id);
  };

  const verMais = () => {
    console.log("Editei!");
  };

  const [isToggledOn, setToggle] = useState(false);
  const toggle = () => setToggle(!isToggledOn);

  const editarUsuario = () => {
    console.log("Editei!");
  };

  return (
    <div className="card shadow-sm rounded bg-light my-3 p-2">
      <div className="container">
        <div className="row">
          <div className="col-md-5">
            <h5 className="text-primary text-left">
              {nome}
              {"  "}
              {sobrenome}
            </h5>
          </div>
          <div className="col-md-4">
            <p>{email}</p>
          </div>
          <div className="col-md-3 text-center">
            {superuser === true ? (
              <i
                style={{ color: "black", margin: "3px" }}
                className="fas fa-users"
              />
            ) : (
              <i
                style={{ color: "#C7C6C4", margin: "3px" }}
                className="fas fa-users"
              />
            )}
            {ativo === true ? (
              <i
                style={{ color: "black", margin: "3px" }}
                className="fas fa-power-off"
              />
            ) : (
              <i
                style={{ color: "#C7C6C4", margin: "3px" }}
                className="fas fa-power-off"
              />
            )}
            <button>
              <i className="far fa-trash-alt" onClick={onDelete} />
            </button>
            <button>
              <i className="fas fa-pencil-alt" onClick={editarUsuario} />
            </button>
            {isToggledOn === false ? (
              <button>
                <i className="fas fa-chevron-down" onClick={toggle} />
              </button>
            ) : (
              <button>
                <i className="fas fa-chevron-up" onClick={toggle} />
              </button>
            )}
          </div>
        </div>
        {isToggledOn ? (
          <div className="row" style={{ margin: "20px 15px 20px 15px" }}>
            <div className="col-md-8">
              <div className="row">{endereco}</div>
              <div className="row">
                {cidade}-{estado}
              </div>
              <div className="row">{cep}</div>
            </div>
            <div className="col-md-4">
              <div className="row">CPF: {cpf}</div>
              <div className="row">Celular: {celular}</div>
            </div>
          </div>
        ) : (
          <div />
        )}
      </div>
    </div>
  );
};

export default UsuarioItem;
