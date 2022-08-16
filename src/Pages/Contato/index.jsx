import React from 'react';
import style from './style.module.scss';

import banner from '../../images/banner01.jpg';

export default function Contato() {
  return (
    <section className={style.contatoContainer}>
      <div className={style.bannerContainer}>
        <img src={banner} alt="banner" className={style.banner} />
        <h1 className={style.title}>Atendimento ao Cliente</h1>
      </div>
      <div>
        <h1>teste</h1>
      </div>
    </section>
  )
}