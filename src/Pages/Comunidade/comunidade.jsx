import React from "react";
import { useEffect } from 'react';
import { useState } from 'react';
import style from './style.module.scss';
import axios from 'axios';
import Card from './Card';

export default function Comunidade() {

  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/comunidade")
    .then(
      response => {
        setProdutos(response.data);
      }
    )

  }, []);

  return (
    <section>
      <div className={style.container}>
        <h1 className={style.title}>Criações da Comunidade</h1>
        <p className={style.desc}>Itens desenvolvidos utilizando os materiais 3D LAB</p>
        <div className={style.content}>
          {(produtos.length > 0) ? (
            produtos.map(item => {
              return (
                <Card
                  href={item.id}
                  key={item.id}
                  src={item.nomeImagem}
                  alt={item.nome}
                  title={item.nome}
                  autor={item.autor}
                />
              )
            })
          )
            : <p>Carregando...</p>}
        </div>
        <div>

        </div>
      </div>
    </section >
  );
}

