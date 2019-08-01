import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

// Components
import DashBoard from "./Components/Dashboard/DashBoard";
import Header from "./Components/Layout/Header";
import Usuarios from "./Components/Usuario/Usuarios";
import About from "./Components/Pages/About";
import Register from "./Components/Auth/Register";
import Login from "./Components/Auth/Login";
import Alerts from "./Components/Layout/Alerts.js";

// Contexts
import VAState from "./Context/vacaamarela/vaState";
import AuthState from "./Context/auth/AuthState";
import AlertState from "./Context/alert/AlertState";

const App = () => {
  return (
    <AuthState>
      <VAState>
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
                  <Route exact path="/about" component={About} />
                  <Route exact path="/register" component={Register} />
                </Switch>
              </div>
            </Fragment>
          </Router>
        </AlertState>
      </VAState>
    </AuthState>
  );
};

export default App;
