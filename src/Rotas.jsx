import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import Main from "./paginas/main";
import Metas from "./paginas/metas";
import Consultoria from "./paginas/consultoria";
import Carteira from "./paginas/carteira";

const Rotas = () => (
  <Switch>
    <Redirect exact path="/" to="/main" />
    <Route path="/main" component={Main} />
    <Route path="/carteira" component={Carteira} />
    <Route path="/metas" component={Metas} />
    <Route path="/consultoria" component={Consultoria} />
    <Redirect from="*" to="/404" />
  </Switch>
);
export default Rotas;
