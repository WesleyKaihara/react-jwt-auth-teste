import React from "react";
import { useEffect } from 'react';
import style from './style.module.scss';
import axios from 'axios';
import authHeader from '../../services/auth-header';
import { useState } from 'react';

export default function CarrinhoCompras() {
  
  const [listaPedidos,setListaPedidos] = useState([]);
  const [listaProdutos,setListaProdutos] = useState([]);
  const [reload,setReload] = useState(false);


  useEffect(() => {
    axios.get("http://localhost:8080/carrinhoCompras",{ headers: authHeader() })
      .then(res=>{
        setListaPedidos(res.data);
      });
      
  }, []);

  function remover(idProduto){
    axios.delete(`http://localhost:8080/carrinhoCompras/${idProduto}`,{ headers: authHeader() })
      .then(res => window.location.href = "/carrinhoCompras")
  }


  if( listaPedidos.length !== listaProdutos.length ){
    let produtosArray = [];
    listaPedidos.map((item) => (
      axios.get(`http://localhost:8080/produto/${item.idProduto}`,{ headers: authHeader() })
      .then(res=>{
        produtosArray.push(res.data)
        console.log(produtosArray)})
    ))
  }


  return (
    <div className={style.container}>
      <h1>Carrinho Compras - {listaPedidos.length} produto(s)</h1>
      <table className={style.tabelaCarrinho}>
        <thead>
          <tr>
            <th>Quantidade</th>
            <th>Status</th>
            <th>Remover</th>
          </tr>
        </thead>
        <tbody>
        {(listaPedidos.length > 0 && listaPedidos.length === listaProdutos.length )?(
          listaPedidos.map((item,index) =>
          (
            <tr key={item.id} className={style.produto}>
              <td>{item.quantidade}</td> 
              <td>{item.status}</td>
              <td onClick={e => remover(item.idProduto)} className={style.removeBtn}>X</td>
            </tr>
          )
          )
        )
          :
        <tr><td>Carrinho Vazio</td></tr>}
        </tbody>
      </table>
    </div>
  );
}
