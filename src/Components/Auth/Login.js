import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../Context/auth/authContext";

const Login = props => {
  const authContext = useContext(AuthContext);
  const [user, setUser] = useState({
    email: "",
    senha: ""
  });

  const { login, token } = authContext;

  const { email, senha } = user;

  useEffect(() => {
    if (token) {
      props.history.push("/dashboard");
    }
  }, [token, props.history]);

  const onChange = e => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    login({
      email,
      senha
    });
  };

  return (
    <div className="form-container">
      <h1 style={{ padding: "30px" }}>
        <span className="text-primary">Login</span>
      </h1>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label
            htmlFor="email"
            style={{ marginRight: "30px", fontSize: "125%" }}
          >
            E-mail
          </label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={onChange}
            style={{ width: "300px" }}
          />
        </div>
        <div className="form-group">
          <label
            htmlFor="senha"
            style={{ marginRight: "30px", fontSize: "125%" }}
          >
            Senha
          </label>
          <input
            type="password"
            name="senha"
            value={senha}
            onChange={onChange}
            style={{ width: "300px" }}
          />
        </div>
        <input
          type="submit"
          value="Login"
          className="btn btn-primary btn-block"
        />

        {/* <div class="input-group mb-3">
  <div class="input-group-prepend">
    <span class="input-group-text" id="inputGroup-sizing-default">Default</span>
  </div>
  <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
</div> */}
      </form>
      <div style={{ marginTop: "20px" }}>
        Não tem cadastro?
        <Link to="/register"> Clique Aqui</Link>
      </div>
    </div>
  );
};

export default Login;
