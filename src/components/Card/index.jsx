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
        <small className={style.desconto}>10% de desconto no PIX</small>
        <div class={style.custom_shape_divider_bottom_1662257597}>
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class={style.shape_fill}></path>
          </svg>
        </div>
      </div >
    </a>

  )
}