import React from "react";
import { useEffect } from 'react';
import style from './style.module.scss';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
import authHeader from '../../services/auth-header';
import AuthService from "../../services/auth.service";

export default function Produto() {
  const { id } = useParams();

  const [info, setInfo] = useState({});
  const [isInCart, setIsInCart] = useState(false);
  const [quantidade,setQuantidade] = useState(1);
  const [diametro,setDiametro] = useState(1.75);
  const [peso,setPeso] = useState(1000);


  useEffect(() => {
    axios.get("http://localhost:8080/produto/" + id)
      .then((response) => setInfo(response.data));
    axios.get("http://localhost:8080/carrinhoCompras/isInCart/" + id,{ headers: authHeader() })
      .then((response) =>
      (response.data)?setIsInCart(true):setIsInCart(false));
  }, [id]);


  const user = AuthService.getCurrentUser();

  function addToCart(){
    axios.post("http://localhost:8080/carrinhoCompras",
    { headers: authHeader(),
        idCliente: user.id,
        idProduto: parseInt(id),
        peso:peso,
        diametro:diametro,
        quantidade:quantidade
      }
    );
    window.location.reload();
  }

  console.log(quantidade);

  return (
    <div className={style.container}>
      {(info) ?
        <>
          <div className={style.produtoContainer}>
            <img 
            src={`http://localhost:8080/produto/img/${info.nomeImagem}`} 
            alt={info.nome} 
            className={style.img}
            />
            <div className={style.produtoInfo}>
            <h1 className={style.title}>{info.nome}</h1>
            <p className={style.disponibilidade}>PRODUTO DISPONÍVEL</p>
            <h3 className={style.valor}>R${info.valor},00</h3>
            <small>À vista no PIX com até 10% OFF</small>
            <p className={style.descricao}>{info.descricao}</p>
              <input type="hidden" name="idCliente" value={user.id} />
              <input type="hidden" name="idProduto" value={parseInt(id)} />
                <h2 className={style.subTitle}>Peso</h2>
                <select 
                name="peso" 
                className={style.select}
                value={peso}
                onChange={(e)=> setPeso(e.value)}            
                >
                  <option value={1000}>1kg</option>
                  <option value={500}>500g</option>
                  <option value={200}>200g</option>
                  <option value={50}>50g</option>
                </select>
                <h2 className={style.subTitle}>Diâmetro</h2>
                <select 
                name="diametro" 
                className={style.select}   
                value={diametro}
                onChange={(e)=> setDiametro(e.value)}        
                >
                  <option value="1.75">1,75mm</option>
                  <option value="2.85">2,85mm</option>
                </select>
                <h2 className={style.subTitle}>Quantidade</h2>
                <input 
                type="number"
                name="quantidade" 
                className={style.quantidadeInput}
                value={quantidade}
                onChange={(e)=> setQuantidade(e.target.value)}
                /><br />
                {(isInCart) ?
              <a href="/carrinhoCompras"><p className={style.btn}>Ir para Carrinho</p></a>:
              <button type="submit" className={style.btn} onClick={e => addToCart()}>Adicionar ao carrinho</button>
            }
            </div>
          </div>
        </>
        : <p>Carregando...</p>
      }
      

    </div>
  );
}
