import React from "react";
import { useEffect } from 'react';
import { useState } from 'react';
import style from './style.module.scss';

import banner from '../../images/banner03.jpg';
import UserService from "../../services/user.service";
import ProdutosService from '../../services/produtos.service';
import Card from '../../components/Card';

export default function Home() {

  const [content, setContent] = useState([]);
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    UserService.getPublicContent().then(
      response => {
        setContent(response.data);
      },
      error => {
        setContent(
          (error.response && error.response.data) ||
          error.message ||
          error.toString()
        );
      }
    );

    ProdutosService.getProdutos().then(
      response => {
        setProdutos(response.data);
      }
    )

  }, [])
  console.log(produtos);
  return (
    <section>
      <div className={style.container}>
        <h1 className={style.title}>Novidades</h1>
        <div className="content">
          {(produtos.length > 0) ? (
            produtos.map(produto => {
              return (
                <Card
                  href={produto.id}
                  key={produto.id}
                  src={produto.nomeImagem}
                  alt={produto.nome}
                  title={produto.nome}
                  valor={produto.valor}
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

