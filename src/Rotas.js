import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Main from '../src/paginas/main';
import Login from '../src/paginas/login';

const Rotas = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/login" component={Login} />
        </Switch>
    </BrowserRouter>
)
export default Rotas;