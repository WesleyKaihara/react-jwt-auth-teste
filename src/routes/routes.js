import React from 'react'
import Login from "../Pages/Login/login.component";
import Register from "../Pages/Cadastro";
import Home from "../Pages/Home/home.component";
import Profile from "../Pages/Perfil";
import BoardUser from "../components/board-user.component";
import BoardModerator from "../components/board-moderator.component";
import BoardAdmin from "../components/board-admin.component";
import Contato from '../Pages/Contato';
import Produto from '../Pages/Produto';
import CarrinhoCompras from '../Pages/CarrinhoCompras';
import Pesquisa from '../Pages/Pesquisa';

import { Switch, Route } from "react-router-dom";
import Blog from '../Pages/Blog/blog';


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
        <Route exact path="/contato" component={Contato} />
        <Route path="/produto/:id" component={Produto} />
        <Route path="/pesquisa/:busca" component={Pesquisa} />
        <Route exact path="/carrinhoCompras" component={CarrinhoCompras} />
        <Route path="/blog" component={Blog} />
      </Switch>
    </div>
  );
}