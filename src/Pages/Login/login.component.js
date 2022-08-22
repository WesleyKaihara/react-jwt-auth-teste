import React from "react";
import Form from "react-validation/build/form";
import style from './style.module.scss';
import AuthService from "../../services/auth.service";

import fundo from '../../images/banner02.jpg';
import { useState } from 'react';

export default function Login() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin(e) {
    e.preventDefault();

    AuthService.login(username, password).then(
      () => {
        window.location = "/profile";
      }
    );
  }

  return (
    <section className={style.login}>
      <img src={fundo} alt="fundo" className={style.fundo} />
      <div className={style.loginContainer}>
        <h1 className={style.title}>Já tenho Cadastro</h1>
        <p className={style.newConta}>Não tem uma conta? <a href="/">Cadastrar</a></p>
        <Form
          onSubmit={(e) => handleLogin(e)}
          className={style.form}
        >
          <label htmlFor="username">Usuário</label>
          <input
            type="text"
            placeholder='Usuário'
            name='username'
            onChange={e => setUsername(e.target.value)}
            value={username}
          />
          <label htmlFor="password">Senha</label>
          <input
            type="password"
            name="password"
            onChange={e => setPassword(e.target.value)}
            value={password}
            placeholder='Digite sua senha'
          />
          <button type="submit" className={style.formBtn}>Entrar</button>
        </Form>
      </div>
    </section>
  );
}
