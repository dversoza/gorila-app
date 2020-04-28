import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import Main from "./paginas/main";
import Login from "./paginas/login";

const Rotas = () => (
  <BrowserRouter>
    <Switch>
      <Redirect exact path="/" to="/login" />
      <Route exact path="/login" component={Login} />
    </Switch>
  </BrowserRouter>
);
export default Rotas;
