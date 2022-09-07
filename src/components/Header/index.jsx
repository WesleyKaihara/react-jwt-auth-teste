import React, { useEffect } from 'react';
import { useState } from 'react';
import AuthService from "../../services/auth.service";
import style from './style.module.scss';
import Logo from '../../images/logo.png';
import { faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import authHeader from '../../services/auth-header';

export default function Header() {

  const [showModeratorBoard, setShowModeratorBoard] = useState(false);
  const [showAdminBoard, setShowAdminBoard] = useState(false);
  const [currentUser, setCurrentUser] = useState(undefined);
  const [quantidade, setQuantidade] = useState(0);
  const [listaProdutos,setListaProdutos] = useState([]);
  const [itensCarrinho,setItensCarrinho] = useState([]);
  const [valorTotal,setValorTotal] = useState({valor:0,itens:0});
  const [pesquisa,setPesquisa] = useState("");


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

    axios.get("http://localhost:8080/carrinhoCompras",{ headers: authHeader() })
      .then(res => {
        setItensCarrinho(res.data);
        setQuantidade(res.data.length);
      })

    axios.get(`http://localhost:8080/produto`,{ headers: authHeader() })
      .then(res => {setListaProdutos(res.data)})
  }, [])
  

  if(valorTotal.itens !== itensCarrinho.length){
    listaProdutos.map((produto) => (
      itensCarrinho.map((item) => (
        (item.idProduto === produto.id)?
        // console.log(produto.valor * item.quantidade)
        setValorTotal({valor:valorTotal.valor + produto.valor * item.quantidade,itens:valorTotal.itens + 1})
        :null
      ))
    ))
  }


  return (
    < header className={style.header} >
      <a href="/"><img src={Logo} alt="3dLab" className={style.logo} /></a>
      <div className={style.buscaContainer}>
        <input
          type="search"
          name="buscaProduto"
          className={style.input}
          value={pesquisa}
          onChange={e => setPesquisa(e.target.value)}
          placeholder="Buscar Produto" />
        <button className={style.buscaBtn} onClick={() => window.location.href = "/pesquisa/"+pesquisa}>Buscar</button>
      </div>
      <nav className={style.nav}>
        {currentUser ? (
          <a href="/profile" className={style.navItem}>
            {currentUser.username}
          </a>
        ) : (
          <div className="navbar-nav ml-auto">
            <a href="/login">
              <div className={style.iconContainer}>
                <FontAwesomeIcon icon={faUser} className={style.icon} />
                <p>Entrar<br />Cadastrar</p>
              </div></a>
          </div>
        )}


        <a href="/carrinhoCompras">
          <div className={style.iconContainer}>
            <div className={style.quantidade}>{quantidade}</div>
            <FontAwesomeIcon icon={faShoppingCart} className={style.icon} />
          </div>
        </a>

        <div className={style.valorTotalContainer}>
          <small className={style.small}>Total</small>
          <p className={style.valorTotal}>{valorTotal.valor}</p>
        </div>
        {currentUser ? (
          <a href="/login" className={style.navItem} onClick={logOut}>
            Sair
          </a>
        ) : null}
      </nav>
    </ header >
  )
}

