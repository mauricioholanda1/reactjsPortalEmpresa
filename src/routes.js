import React from "react";
import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom";
import {isAuthenticated} from "./utils/auth";
import Home from "./pages/home";
import Funcionarios from "./pages/funcionarios";
import Extrato from "./pages/extrato";

const PrivateRoute = ({component: Component, ...rest}) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{pathname: "/", state: {from: props.location}}} />
      )
    }
  />
);

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home} />
      <PrivateRoute path="/funcionarios" component={Funcionarios} />
      <PrivateRoute path="/extrato" component={Extrato} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
