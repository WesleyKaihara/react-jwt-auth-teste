import React, { useEffect } from 'react';
import { useState } from 'react';
import AuthService from "../../services/auth.service";
import { Link } from "react-router-dom";
import style from './style.module.scss';
import Logo from '../../images/logo.png';
import { faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Header() {

  const [showModeratorBoard, setShowModeratorBoard] = useState(false);
  const [showAdminBoard, setShowAdminBoard] = useState(false);
  const [currentUser, setCurrentUser] = useState(undefined);

  function logOut() {
    AuthService.logout();
    this.setState({
      showModeratorBoard: false,
      showAdminBoard: false,
      currentUser: undefined,
    });
  }

  useEffect(() => {
    const user = AuthService.getCurrentUser();

    if (user) {
      setCurrentUser(user);
      setShowModeratorBoard(user.roles.includes("ROLE_MODERATOR"))
      setShowAdminBoard(user.roles.includes("ROLE_ADMIN"))
    }

  }, [])

  return (
    < header className={style.header} >
      <a href="/"><img src={Logo} alt="3dLab" className={style.logo} /></a>
      <div className={style.buscaContainer}>
        <input
          type="search"
          name="buscaProduto"
          className={style.input}
          placeholder="Buscar Produto" />
        <button className={style.buscaBtn}>Buscar</button>
      </div>
      <nav className={style.nav}>
        {currentUser ? (
          <Link to={"/profile"}>
            {currentUser.username}
          </Link>
        ) : (
          <div className="navbar-nav ml-auto">
            <a href="/login">
              <div className={style.iconContainer}>
                <FontAwesomeIcon icon={faUser} className={style.icon} />
                <p>Entrar<br />Cadastrar</p>
              </div></a>
          </div>
        )}


        <div className={style.iconContainer}>
          <div className={style.quantidade}>1</div>
          <FontAwesomeIcon icon={faShoppingCart} className={style.icon} />
        </div>
        <div className={style.valorTotalContainer}>
          <small className={style.small}>Total</small>
          <p className={style.valorTotal}>100</p>
        </div>
        {currentUser ? (
          <a href="/login" className="nav-link" onClick={logOut}>
            Sair
          </a>
        ) : null}
      </nav>
    </ header >
  )
}


{/* <nav className="navbar navbar-expand">
        <Link to={"/"} className="navbar-brand">
          <img src={Logo} className={style.logo} alt="logo" />
        </Link>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/home"} className="nav-link">
              Home
            </Link>
          </li>

          {showModeratorBoard && (
            <li className="nav-item">
              <Link to={"/mod"} className="nav-link">
                Moderator Board
              </Link>
            </li>
          )}

          {showAdminBoard && (
            <li className="nav-item">
              <Link to={"/admin"} className="nav-link">
                Admin Board
              </Link>
            </li>
          )}

          {currentUser && (
            <li className="nav-item">
              <Link to={"/user"} className="nav-link">
                User
              </Link>
            </li>
          )}
        </div>

        {currentUser ? (
          <div className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to={"/profile"} className="nav-link">
                {currentUser.username}
              </Link>
            </li>
            <li className="nav-item">
              <a href="/login" className="nav-link" onClick={logOut}>
                LogOut
              </a>
            </li>
          </div>
        ) : (
          <div className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to={"/login"} className="nav-link">
                Login
              </Link>
            </li>

            <li className="nav-item">
              <Link to={"/register"} className="nav-link">
                Sign Up
              </Link>
            </li>
          </div>
        )}
      </nav> */}