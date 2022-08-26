import React from 'react'
import Login from "../Pages/Login/login.component";
import Register from "../components/register.component";
import Home from "../Pages/Home/home.component";
import Profile from "../Pages/Perfil";
import BoardUser from "../components/board-user.component";
import BoardModerator from "../components/board-moderator.component";
import BoardAdmin from "../components/board-admin.component";
import Contato from '../Pages/Contato';
import Produto from '../Pages/Produto';
import CarrinhoCompras from '../Pages/CarrinhoCompras';

import { Switch, Route } from "react-router-dom";


export default function Rotas() {
  return (
    <div className="container mt-3">
      <Switch>
        <Route exact path={["/", "/home"]} component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/profile" component={Profile} />
        <Route path="/user" component={BoardUser} />
        <Route path="/mod" component={BoardModerator} />
        <Route path="/admin" component={BoardAdmin} />
        <Route path="/contato" component={Contato} />
        <Route path="/produto/:id" component={Produto} />
        <Route path="/carrinhoCompras" component={CarrinhoCompras} />
      </Switch>
    </div>
  )
}