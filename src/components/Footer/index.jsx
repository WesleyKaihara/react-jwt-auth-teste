import React from 'react';
import style from './style.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faYoutube, faLinkedinIn, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import Logo from '../../images/logo.png';

export default function Footer() {
  return (
    <footer className={style.footer}>
      <div className={style.footerContainer}>
        <img src={Logo} alt="3D_LAB" className={style.logo} />
        <h2 className={style.title}>Endereço</h2>
        <p className={style.paragraph}>Rua Toyota, n°490, Jardim Piemont - Betim - MG </p>
        <h2 className={style.title}>Horário de funcionamento</h2>
        <p className={style.paragraph}> 08:00 às 17:00 | Segunda à sexta-feira</p>
        <br />
        <a href="/" className={style.link}>Clique aqui para informações de contato</a>
      </div>
      <div className={style.redesSociais}>
        <h1>Redes Sociais</h1>
        <div className={style.redesSociaisContainer}>
          <a href="https://www.facebook.com/3dlabbrasil/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faFacebookF} className={style.icon} /></a>
          <a href="https://www.instagram.com/3dlab_brasil/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faInstagram} className={style.icon} /></a>
          <a href="https://www.youtube.com/channel/UCbpLGW1phwIAOHrOlX48CRA" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faYoutube} className={style.icon} /></a>
          <a href="https://www.linkedin.com/company/3d-lab-tecnologia-em-impressao-3d/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedinIn} className={style.icon} /></a>
          <a href="https://api.whatsapp.com/send/?phone=5531986240456&text&type=phone_number&app_absent=0" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faWhatsapp} className={style.icon} /></a>
        </div>
      </div>
    </footer>
  )
}