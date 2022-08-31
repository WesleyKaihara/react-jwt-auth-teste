import React from 'react';
import style from './style.module.scss';

export default function Card(props) {

  const { src, alt, title, valor, href } = props
  return (
    <a href={"/produto/" + href} title={title}>
      <div className={style.card}>
        <img src={require("../../../../../../imagens/" + src)} alt={alt} className={style.cardImg} />
        <h1 className={style.title}>{title}</h1>
        <small className={style.valor}>à vista</small>
        <h2 className={style.valor}>R${valor},00</h2>
        <small>10% de desconto no PIX</small>
      </div >
    </a>

  )
}