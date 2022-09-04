import React from "react";
import Form from "react-validation/build/form";
import style from './style.module.scss';
import AuthService from "../../services/auth.service";

import fundo from '../../images/banner02.jpg';
import { useState } from 'react';

export default function Cadastro() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");


  function handleRegister(e) {
    e.preventDefault();

    AuthService.register(username,email,password).then(
      () => {
        AuthService.login(username,password).then(
          () => {
            window.location.href = "/profile";
          }
        );
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
          onSubmit={(e) => handleRegister(e)}
          className={style.form}
        >
          <input type="hidden" name="role" value="ROLE_USER"/>
          <label htmlFor="username">Usuário</label>
          <input
            autoComplete="off"
            type="text"
            placeholder='Usuário'
            name='username'
            onChange={e => setUsername(e.target.value)}
            value={username}
          />
          <label htmlFor="email">E-mail</label>
          <input
            autoComplete="off"
            type="email"
            placeholder='nome@email.com'
            name='email'
            onChange={e => setEmail(e.target.value)}
            value={email}
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
