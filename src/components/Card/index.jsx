import React from 'react';
import style from './style.module.scss';

export default function Card(props) {

  const { src, alt, title, valor } = props
  return (
    <div>
      <img src={require("../../../../../../imagens/" + src)} alt={alt} />
      <h1>{title}</h1>
      <h2>{valor}</h2>
    </div>
  )
}