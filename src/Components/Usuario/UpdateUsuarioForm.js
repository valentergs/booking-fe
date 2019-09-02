import React, { useEffect, useContext, useState } from "react";
import VAContext from "../../Context/vacaamarela/vaContext";

const UpdateUsuarioForm = () => {
  const vaContext = useContext(VAContext);
  const { updateUsuario, current, clearCurrent } = vaContext;

  useEffect(() => {
    setUsuario(current);
  }, [vaContext, current]);

  const [usuario, setUsuario] = useState({
    nome: "",
    sobrenome: "",
    email: "",
    cpf: "",
    endereco: "",
    cidade: "",
    estado: "",
    cep: "",
    celular: "",
    superuser: false,
    ativo: false,
    novo: true
  });

  const {
    nome,
    sobrenome,
    email,
    cpf,
    endereco,
    cidade,
    estado,
    cep,
    celular,
    superuser,
    ativo,
    novo
  } = usuario;

  const onChange = e => {
    const target = e.target;
    const name = target.name;
    const value = target.type === "checkbox" ? target.checked : target.value;
    setUsuario({ ...usuario, [name]: value });
  };

  const onSubmit = e => {
    e.preventDefault();
    updateUsuario(usuario);
    clearAll();
  };

  const clearAll = () => {
    clearCurrent();
  };

  return (
    <div>
      <form onSubmit={onSubmit} method="post">
        <h2 className="text-primary">Editar Usuario</h2>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Nome"
            name="nome"
            value={nome}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Sobrenome"
            name="sobrenome"
            value={sobrenome}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            className="form-control"
            placeholder="Email"
            name="email"
            value={email}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="CPF"
            name="cpf"
            value={cpf}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Endereço"
            name="endereco"
            value={endereco}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Cidade"
            name="cidade"
            value={cidade}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Estado"
            name="estado"
            value={estado}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="CEP"
            name="cep"
            value={cep}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Celular"
            name="celular"
            value={celular}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <input
            type="checkbox"
            name="superuser"
            checked={superuser}
            onChange={onChange}
          />
          <label style={{ marginLeft: "4px" }}>Superuser</label>

          <input
            style={{ marginLeft: "15px" }}
            type="checkbox"
            name="ativo"
            checked={ativo}
            onChange={onChange}
          />
          <label style={{ marginLeft: "4px" }}>Ativo</label>

          <input
            style={{ marginLeft: "15px" }}
            type="checkbox"
            name="novo"
            checked={novo}
            onChange={onChange}
          />
          <label style={{ marginLeft: "4px" }}>Novo</label>
        </div>
        <div>
          <input
            type="submit"
            value="Atualizar usuário"
            className="btn btn-primary btn-block"
          />
        </div>
        <div>
          <button
            className="btn btn-warning btn-block"
            style={{ marginTop: "10px" }}
            onClick={clearAll}
          >
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateUsuarioForm;
