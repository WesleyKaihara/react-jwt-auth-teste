import React from "react";
import { useEffect } from 'react';
import { useState } from 'react';
import style from './style.module.scss';

import ProdutosService from '../../services/produtos.service';
import Card from '../../components/Card';

export default function Home() {

  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    ProdutosService.getProdutos().then(
      response => {
        setProdutos(response.data);
      }
    )

  }, []);

  return (
    <section>
      <div className={style.container}>
        <h1 className={style.title}>Novidades</h1>
        <div className={style.content}>
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

