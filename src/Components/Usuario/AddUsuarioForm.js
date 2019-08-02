import React, { useEffect, useContext, useState } from "react";
import VAContext from "../../Context/vacaamarela/vaContext";

const AddUsuarioForm = () => {
  const vaContext = useContext(VAContext);
  const { addUsuario, current, clearCurrent } = vaContext;

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
      ativo: false
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
    ativo: false
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
    celular,
    superuser,
    ativo
  } = usuario;

  const onChange = e => {
    const target = e.target;
    const name = target.name;
    const value = target.type === "checkbox" ? target.checked : target.value;
    setUsuario({ ...usuario, [name]: value });
  };

  const onSubmit = e => {
    e.preventDefault();
    addUsuario(usuario);
    clearAll();
  };

  const clearAll = () => {
    clearCurrent();
  };

  return (
    <div>
      <form onSubmit={onSubmit} method="post">
        <h2 className="text-primary">Adicionar Usuário</h2>
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
        </div>
        <div>
          <input
            type="submit"
            value="Adicionar Usuário"
            className="btn btn-primary btn-block"
          />
        </div>
      </form>
    </div>
  );
};

export default AddUsuarioForm;
