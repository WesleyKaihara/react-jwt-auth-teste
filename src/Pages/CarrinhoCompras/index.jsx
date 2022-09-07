import React from "react";
import { useEffect } from 'react';
import style from './style.module.scss';
import axios from 'axios';
import authHeader from '../../services/auth-header';
import { useState } from 'react';

export default function CarrinhoCompras() {
  
  const [listaPedidos,setListaPedidos] = useState([]);
  const [listaProdutos,setListaProdutos] = useState([]);
  const [valorTotal,setValorTotal] = useState({valor:0,itens:0})

  useEffect(() => {
    axios.get("http://localhost:8080/carrinhoCompras",{ headers: authHeader() })
      .then(res=>{
        setListaPedidos(res.data);
        axios.get(`http://localhost:8080/produto`,{ headers: authHeader() })
        .then(res => {setListaProdutos(res.data)})
      });

  }, [])

  function remover(idProduto){
    axios.delete(`http://localhost:8080/carrinhoCompras/${idProduto}`,{ headers: authHeader() })
      .then(res => window.location.href = "/carrinhoCompras")
  }

  if(valorTotal.itens !== listaPedidos.length){
    listaProdutos.map((produto) => (
      listaPedidos.map((item) => (
        (item.idProduto === produto.id)?
        setValorTotal({valor:valorTotal.valor + (produto.valor * item.quantidade),itens:valorTotal.itens + 1})
        :null
      )
      )
    ))
  }
  
 function changeQuantidade(event,idCarrinho,novaQuantidade,valorProduto){

    (event === "-")?
      axios.get(`http://localhost:8080/carrinhoCompras/changeQuantidade/${idCarrinho}/${novaQuantidade}`,{ headers: authHeader()})
      .then(
        setValorTotal({valor:valorTotal.valor,itens:valorTotal.itens - 1}),
        window.location.reload()
        )
      :
   axios.get(`http://localhost:8080/carrinhoCompras/changeQuantidade/${idCarrinho}/${novaQuantidade}`,{ headers: authHeader()})
   .then( 
    setValorTotal({valor:valorTotal.valor,itens:valorTotal.itens + 1}),
    window.location.reload())
  }

  console.log(listaPedidos)
  return (
    <section className={style.container}>
      <h1>Carrinho Compras - {listaPedidos.length} produto(s)</h1>
      <div className={style.carrinhoCompras}>
      <table className={style.tabelaCarrinho}>
        <thead>
          <tr>
            <th>Produto</th>
            <th>Preço unitário</th>
            <th>Quantidade</th>
            <th>Status</th>
            <th>Excluir</th>
          </tr>
        </thead>
        <tbody>
        {(listaPedidos.length > 0 && listaProdutos.length > 0)?(
          listaPedidos.map((item,index) =>
          (
            <tr key={item.id} className={style.produto}>
              {listaProdutos.map((element) => 
                  ((element.id === item.idProduto)?
                      <td key={element.id} className={style.produtoName}>
                        <img src={require("../../../../../../imagens/" + element.nomeImagem)} alt={element.nome} className={style.cartImg}/> 
                        {element.nome}
                      </td>
                      :null
              ))}
              {listaProdutos.map((element,index) => 
                  ((element.id === item.idProduto)?
                      <td key={element.id} className={style.cartInfo}>R${element.valor},00</td>
                      :null
                  ))}
              <td className={style.cartInfo}>
                <button onClick={e =>changeQuantidade("-",item.id,parseInt(item.quantidade) - 1,listaProdutos[index].valor)} disabled={item.quantidade === "1"} className={style.mudarValor}>-</button> 
                  {item.quantidade} 
                <button onClick={e =>changeQuantidade("+",item.id,parseInt(item.quantidade) + 1)} className={style.mudarValor}>+</button> </td> 
              <td className={style.cartInfo}>{item.status}</td>
              <td onClick={e => remover(item.idProduto)} className={style.removeBtn}>Remover</td>
            </tr>
          )))
          :
        <tr><td colspan="6">Carrinho Vazio</td></tr>}
        </tbody>
      </table>
      <div className={style.resumo}>
          <h1>Resumo</h1>
          <h2 className={style.total}>Valor Total: R${valorTotal.valor},00</h2>
          <hr />
          <h2 className={style.frete}>Frete:</h2>
        <div className={style.pix}>
          <h3>Valor no PIX</h3>
            <p>R${valorTotal.valor*0.9},00</p>
            <p className={style.economia}>Economize R${valorTotal.valor - valorTotal.valor*0.9},00</p>
        </div>
      </div>
      </div>
    </section>
  );
}
