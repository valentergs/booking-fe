import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../Context/auth/authContext";
import Vaca from "../../assets/images/vacaamarela.png";

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
    <div className="container">
      <div className="row">
        <div className="col-md-6">
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
            </form>
            <div style={{ marginTop: "20px" }}>
              Não tem cadastro?
              <Link to="/cadastro"> Clique Aqui</Link>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <img src={Vaca} alt="vacaamarela"></img>
        </div>
      </div>
    </div>
  );
};

export default Login;
