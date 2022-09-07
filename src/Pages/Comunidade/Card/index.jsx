import React from 'react';
import style from './style.module.scss';

export default function Card(props) {

  const { src, alt, title, autor } = props
  return (
      <div className={style.card}>
        <div className={style.containerImg}>
          <img src={require("../../../../../../../imagens/" + src)} alt={alt} className={style.cardImg} />
        </div>
        <h1 className={style.title}>{title}</h1>
        <p className={style.autor}>{autor}</p>
      </div >
  )
}