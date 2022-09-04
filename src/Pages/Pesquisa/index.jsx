import React from 'react';
import style from './style.module.scss';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';
import Card from '../../components/Card';

export default function Contato() {
  const {busca} = useParams();
  const [produtos,setProdutos] = useState([]);
  

  useEffect(()=> {
    axios.get("http://localhost:8080/produto")
      .then(res=>setProdutos(res.data));
  },[]);

  console.log(produtos);
  return (
    <section className={style.pesquisaContainer}>
      <h1>Você pesquisou por: "{busca}"</h1>
      <div className={style.pesquisaItens}>
      {(produtos.length > 0)?(
        produtos.map((item) => (
          (item.nome.toUpperCase().includes(busca.toUpperCase()) || item.categoria === busca)?(
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