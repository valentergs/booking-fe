import React, { Fragment, useContext } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

// Components
import DashBoard from "./Components/Dashboard/DashBoard";
import Header from "./Components/Layout/Header";
import Usuarios from "./Components/Usuario/Usuarios";
import Reservas from "./Components/Reserva/Reservas";
import About from "./Components/Pages/About";
import Register from "./Components/Auth/Cadastro";
import Login from "./Components/Auth/Login";
import Alerts from "./Components/Layout/Alerts.js";

// Contexts
import VAState from "./Context/vacaamarela/vaState";
import AuthState from "./Context/auth/AuthState";
import AuthContext from "./Context/auth/authContext";
import AlertState from "./Context/alert/AlertState";
import ReservaState from "./Context/reserva/reservaState";

const App = () => {
  return (
    <AuthState>
      <VAState>
        <ReservaState>
          <AlertState>
            <Router>
              <Fragment>
                <Header />
                <div className="container">
                  <Alerts />
                  <Switch>
                    <Route exact path="/" component={Login} />
                    <Route exact path="/dashboard" component={DashBoard} />
                    <Route exact path="/usuarios" component={Usuarios} />
                    <Route exact path="/reservas" component={Reservas} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/cadastro" component={Register} />
                  </Switch>
                </div>
              </Fragment>
            </Router>
          </AlertState>
        </ReservaState>
      </VAState>
    </AuthState>
  );
};

export default App;
