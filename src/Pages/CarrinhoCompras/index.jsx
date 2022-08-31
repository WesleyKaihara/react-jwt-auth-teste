import React from "react";
import { useEffect } from 'react';
import style from './style.module.scss';
import axios from 'axios';
import authHeader from '../../services/auth-header';
import { useState } from 'react';

export default function CarrinhoCompras() {
  
  const [listaPedidos,setListaPedidos] = useState([]);
  const [listaProdutos,setListaProdutos] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/carrinhoCompras",{ headers: authHeader() })
      .then(res=>{
        setListaPedidos(res.data);
      });
    axios.get(`http://localhost:8080/produto`,{ headers: authHeader() })
      .then(res => {setListaProdutos(res.data)})
      
  }, []);

  function remover(idProduto){
    axios.delete(`http://localhost:8080/carrinhoCompras/${idProduto}`,{ headers: authHeader() })
      .then(res => window.location.href = "/carrinhoCompras")
  }


  console.log(listaPedidos);

  return (
    <div className={style.container}>
      <h1>Carrinho Compras - {listaPedidos.length} produto(s)</h1>
      <table className={style.tabelaCarrinho}>
        <thead>
          <tr>
            <th>Nome Produto</th>
            <th>Valor</th>
            <th>Quantidade</th>
            <th>Status</th>
            <th>Remover</th>
          </tr>
        </thead>
        <tbody>
        {(listaPedidos.length > 0 && listaProdutos.length > 0)?(
          listaPedidos.map((item,index) =>
          (
            <tr key={item.id} className={style.produto}>
              {listaProdutos.map((element) => ((element.id === item.idProduto)?<td key={element.id}>{element.nome}</td>:null))}
              {listaProdutos.map((element) => ((element.id === item.idProduto)?<td key={element.id}>R${element.valor},00</td>:null))}
              <td>{item.quantidade}</td> 
              <td>{item.status}</td>
              <td onClick={e => remover(item.idProduto)} className={style.removeBtn}>X</td>
            </tr>
          )))
          :
        <tr><td>Carrinho Vazio</td></tr>}
        </tbody>
      </table>
    </div>
  );
}
