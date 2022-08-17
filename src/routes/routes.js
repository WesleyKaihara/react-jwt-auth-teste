import React from 'react'
import Login from "../Pages/Login/login.component";
import Register from "../components/register.component";
import Home from "../Pages/Home/home.component";
import Profile from "../components/profile.component";
import BoardUser from "../components/board-user.component";
import BoardModerator from "../components/board-moderator.component";
import BoardAdmin from "../components/board-admin.component";
import Contato from '../Pages/Contato';

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
      </Switch>
    </div>
  )
}