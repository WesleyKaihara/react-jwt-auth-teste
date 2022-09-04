import React from 'react';
import style from './style.module.scss';

export default function Card(props) {

  const { desc,href,title} = props
  return (
    <a href="/" title={title}>
      <div className={style.card}>
        <h1 className={style.title}>{title}</h1>
        <p className={style.desc}>{desc}</p>
        <button className={style.btn}>Ler mais</button>
        <div className={style.data}>08/05/2022</div>
      </div >
    </a>

  )
}