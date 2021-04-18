import React from 'react'
import styles from '../styles/Footer.module.scss'

const Footer = () => {
  return (
    <footer className={`${styles.footer}`}>
      <div className={`row no-gutters text-center ${styles.row}`}>
        <div className="col-sm-12 col-lg-4 col-12 ">
          <p className="text-white"> Avenida 22 No.5501, e/ 55 y 57 Punta Gorda, Cienfuegos</p>
          <p className="text-white"> </p>
        </div>
        <div className="col-sm-12 col-lg-4 col-12 "><p className="text-white">Desarrollado por :  <span>Ricuesta</span></p></div>
        <div className="col-sm-12 col-lg-4 col-12 ">
          <a href="https://www.facebook.com/EAH-Empresa-de-Aprovechamiento-Hidraulico-Cienfuegos-1239677802846221" target="blank">
            <img src={`/facebook.svg`} alt="Facebook"  className="facebook" />
          </a>
          <a href="https://www.youtube.com/channel/UC_bOaPdIMR6jCabTC7vNpPw" target="blank">
            <img src={`/youtube-icon.svg`} alt="Youtube"  className="youtube" />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
