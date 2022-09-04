import React from "react";
import style from './style.module.scss';

import Card from './Card';

export default function Blog() {

  return (
    <section className={style.container}>
     <h1 className={style.title}>Blog</h1>
     <h3 className={style.subTitle}>Mais recentes...</h3>
     <Card 
     title="Upgrades Ender 3: 13 atualizações que realmente valem a pena"
     desc="Upgrades da Ender 3 são algumas adaptações que podem ser feitas na impressora para otimizar o processo de impressão e deixar suas peças com resultados mais satisfatórios."/>
     <Card 
     title="Upgrades Ender 3: 13 atualizações que realmente valem a pena"
     desc="Upgrades da Ender 3 são algumas adaptações que podem ser feitas na impressora para otimizar o processo de impressão e deixar suas peças com resultados mais satisfatórios."/>
     <Card 
     title="Upgrades Ender 3: 13 atualizações que realmente valem a pena"
     desc="Upgrades da Ender 3 são algumas adaptações que podem ser feitas na impressora para otimizar o processo de impressão e deixar suas peças com resultados mais satisfatórios."/>
    </section >
  );
}

