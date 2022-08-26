import React from "react";
import { useEffect } from 'react';
import style from './style.module.scss';
import axios from 'axios';
import authHeader from '../../services/auth-header';
import { useState } from 'react';

export default function CarrinhoCompras() {
  
  const [listaProdutos,setListaProdutos] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/carrinhoCompras",{ headers: authHeader() })
      .then(res=>{
        setListaProdutos(res.data)
      });
  }, [])

  return (
    <div className={style.container}>
      <h1>Carrinho Compras</h1>
      {(listaProdutos.length > 0 )?(
        listaProdutos.map((item,index) =>
        (
          <div key={item.id}>
            <p>
            {/* <img src={require("../../../../../../imagens/" + produtosInfo[index].nomeImagem)} alt={produtosInfo[index].nome} className={style.cardImg} /> */}
              {item.quantidade}
              {item.status}
            </p>
          </div>
        )
        
        )
      )
       
        :
      <p>Carregando...</p>}
    </div>
  );
}
