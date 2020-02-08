import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";

// import Home from './pages/Home'
import Funcionarios from "./pages/funcionarios";
import Extrato from "./pages/extrato";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        {/* <Route path="/h" exact component={Home} /> */}
        <Route path="/" exact component={Funcionarios} />
        <Route path="/extrato" component={Extrato} />
      </Switch>
    </BrowserRouter>
  );
}
