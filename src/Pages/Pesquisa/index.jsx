import React from 'react';
import style from './style.module.scss';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';
import Card from '../../components/Card';

export default function Contato() {
  const {nomeProduto} = useParams();
  const [produtos,setProdutos] = useState([]);
  

  useEffect(()=> {
    axios.get("http://localhost:8080/produto")
      .then(res=>setProdutos(res.data));
  },[]);

  return (
    <section className={style.pesquisaContainer}>
      <h1>Você pesquisou por: "{nomeProduto}"</h1>
      <div className={style.pesquisaItens}>
      {(produtos.length > 0)?(
        produtos.map((item) => (
          (item.nome.toUpperCase().includes(nomeProduto.toUpperCase()))?(
            <Card
            href={item.id}
            key={item.id}
            src={item.nomeImagem}
            alt={item.nome}
            title={item.nome}
            valor={item.valor}
          />
          ):null
        ))
      )
      :null}
      </div>
     
    </section>
  );
}