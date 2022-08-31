import React from 'react';
import style from './style.module.scss';

import banner from '../../images/banner02.jpg';

export default function Contato() {
  return (
    <section className={style.contatoContainer}>
      <div className={style.bannerContainer}>
        <img src={banner} alt="banner" className={style.banner} />
        <h1 className={style.title}>Atendimento ao Cliente</h1>
      </div>
      <div className={style.contatoContent}>
        <h1 className={style.subTitle}>Perguntas Frequentes</h1>
        <h1 className={style.subTitle}>Onde nos encontrar ...</h1>
        <div className={style.localizacao}>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3681.943358952372!2d-44.07344328513449!3d-19.953530386590604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa6bfdb48828aff%3A0xce2d4d9514c64839!2sR.%20Toyota%2C%20490%20-%20Dom%20I.%20Jardim%20Piemonte%20%2F%20Norte%2C%20Betim%20-%20MG%2C%2032689-354!5e1!3m2!1spt-BR!2sbr!4v1660612609479!5m2!1spt-BR!2sbr" loading="lazy" title='localização da loja - google maps'></iframe>
          <div className={style.localizacao_info}>
            <h2>Horário de funcionamento</h2>
            <p>08:00 às 17:00 | Segunda à sexta-feira</p>
            <h2>Endereço</h2>
            <p>Rua Toyota, n°490, Jardim Piemont – Betim – MG</p>
          </div>
        </div>
      </div>
    </section>
  )
}