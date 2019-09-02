import React, { useEffect, useContext, useState } from "react";
import { withRouter } from "react-router-dom";
import VAContext from "../../Context/vacaamarela/vaContext";

const Cadastro = props => {
  const vaContext = useContext(VAContext);
  const { addUsuario, current, clearCurrent, setAlert } = vaContext;

  useEffect(() => {
    setUsuario({
      nome: "",
      sobrenome: "",
      email: "",
      senha: "",
      cpf: "",
      endereco: "",
      cidade: "",
      estado: "",
      cep: "",
      celular: "",
      superuser: false,
      ativo: true,
      novo: true
    });
  }, [vaContext, current]);

  const [usuario, setUsuario] = useState({
    nome: "",
    sobrenome: "",
    email: "",
    senha: "",
    cpf: "",
    endereco: "",
    cidade: "",
    estado: "",
    cep: "",
    celular: "",
    superuser: false,
    ativo: true,
    novo: true
  });

  const {
    nome,
    sobrenome,
    email,
    senha,
    cpf,
    endereco,
    cidade,
    estado,
    cep,
    celular
  } = usuario;

  const onChange = e => {
    const target = e.target;
    const name = target.name;
    const value = target.type === "checkbox" ? target.checked : target.value;
    setUsuario({ ...usuario, [name]: value });
  };

  const onSubmit = e => {
    e.preventDefault();
    if (nome === "" || email === "" || senha === "") {
      setAlert("Favor digitar todas as informações", "danger");
    } else {
      addUsuario(usuario);
      clearAll();
      props.history.push("/");
    }
  };

  const clearAll = () => {
    clearCurrent();
  };

  return (
    <div className="container">
      <h2 className="text-primary" style={{ margin: "20px" }}>
        Cadastro
      </h2>
      <div className="row">
        <div className="col-md-6">
          <form onSubmit={onSubmit} method="post">
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Nome"
                name="nome"
                value={nome}
                onChange={onChange}
                required
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
                required
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
                type="password"
                className="form-control"
                placeholder="Senha"
                name="senha"
                value={senha}
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
                maxLength="11"
              />
            </div>
          </form>
        </div>
        <div className="col-md-6">
          <form onSubmit={onSubmit} method="post">
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
                maxLength="2"
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
                maxLength="8"
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
                maxLength="11"
              />
            </div>
            <input
              type="submit"
              value="Enviar"
              className="btn btn-primary btn-block"
            />
          </form>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default withRouter(Cadastro);
