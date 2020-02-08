import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";

import Home from './pages/home'
import Funcionarios from "./pages/funcionarios";
import Extrato from "./pages/extrato";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/funcionarios" component={Funcionarios} />
        <Route path="/extrato" component={Extrato} />
      </Switch>
    </BrowserRouter>
  );
}
