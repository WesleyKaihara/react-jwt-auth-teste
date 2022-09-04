import React from "react";
import { useState } from 'react';
import { useEffect } from 'react';
import { Redirect } from "react-router-dom";
import AuthService from "../../services/auth.service";
import style from './style.module.scss';

export default function Profile() {
  const [userReady, setUserReady] = useState(false);
  const [currentUser, setCurrentUser] = useState({ username: "" });
  const [redirect, setRedirect] = useState(null);

  useEffect(() => {
    const currentUser = AuthService.getCurrentUser();

    if (!currentUser)
      setRedirect("/home")
    setUserReady(true);
    setCurrentUser(currentUser);
  }, [])

  if (redirect) {
    return <Redirect to={redirect} />
  }

  return (
    <section className={style.container}>
      
      {(userReady) ?
      
        <form className={style.formUser}>
          <h1 className={style.title}>Meu Perfil</h1>
          <label htmlFor="username">Usuário</label>
          <input 
          type="text" 
          placeholder="Username"
          name='username'
          value={currentUser.username} />
          <label htmlFor="email">E-mail</label>
          <input 
          id="email"
          type="email" 
          name="email" 
          disabled
          value={currentUser.email} 
          placeholder="E-mail"/>
          <label htmlFor="telefone">Telefone</label>
          <input 
          id="telefone"
          type="text" 
          name="telefone"
          value={currentUser.telefone} 
          placeholder="(XX)X XXXX-XXXX"/>
           <a href="/" className={style.nomeSenha}>Alterar senha</a>
          <button type="submit">Salvar</button>
        </form> : null}
        <div className={style.enderecoContainer}>
        <h1 className={style.title}>Endereço</h1>
        <form action="" className={style.formEndereco}>
          <label htmlFor="cep">CEP</label>
          <input type="text" name="cep" id="cep" placeholder='XXXXX-XXX' />
          <div className={style.endereco_grid}>
            <div className={style.endereco_column}>
              <label htmlFor="logradouro">Logradouro</label>
              <input type="text" name="logradouro" id="logradouro" placeholder='Ex:Rua Brasil' />
            </div>
            <div className={style.endereco_column}>
              <label htmlFor="numero">Número</label>
              <input type="text" name="numero"  id="numero" placeholder='Número' />
            </div>
          </div>
          <label htmlFor="referencia">Refêrencia</label>
          <input type="text" name="referencia"  id="referencia" placeholder='Ex:Na frente do mercado' />
          <button type="submit">Salvar Endereço</button>
        </form>
        
        </div>
    </section>
  );
}
