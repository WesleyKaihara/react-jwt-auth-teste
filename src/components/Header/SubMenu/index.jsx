import React from 'react';
import style from './style.module.scss';
import { faStar, faHeadset, faClockRotateLeft, faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default function SubMenu() {
  return (
    <section className={style.subMenu}>
      <div className={style.container}>
        <div className={style.categoriasMenu}>
          <h1 className={style.categoriasTitle}>Categorias <FontAwesomeIcon icon={faAngleDown} className={style.icon} /></h1>
          <div className={style.categoriasContainer}>
            <ul className={style.categoriasMenuList}>
              <a href="/" className={style.categoriasMenuListLink}><li>Impressoras 3D</li></a>
              <a href="/" className={style.categoriasMenuListLink}><li>Filamentos</li></a>
              <a href="/" className={style.categoriasMenuListLink}><li>Resinas</li></a>
              <a href="/" className={style.categoriasMenuListLink}><li>Acessórios e Peças</li></a>
              <a href="/" className={style.categoriasMenuListLink}><li>Cursos</li></a>
              <a href="/" className={style.categoriasMenuListLink}><li>Especiais</li></a>
            </ul>
          </div>
        </div>
        <div className={style.links}>
          <a href="/"><p> Blog</p></a>
          <a href="/"><p><FontAwesomeIcon icon={faStar} className={style.icon} />Comunidade</p></a>
          <a href="/"><p><FontAwesomeIcon icon={faClockRotateLeft} className={style.icon} />Lançamentos</p></a>
          <a href="/contato"><p><FontAwesomeIcon icon={faHeadset} className={style.icon} />Contato</p></a>
          <a href="/">
            <h2 className={style.rastreio}>
              Rastreio
            </h2>
          </a>

        </div>
      </div>

    </section>
  )
}