import React from 'react'
import Header from './Header'
import styles from '../styles/Layout.module.scss'
import Footer from './Footer'


const Main = ({ children }) => {
  return (
    <>
      <Header />
      <div className={`container-fluir ${styles.container_img}`}>
          <img src="/logo.jpg" alt="" className={`img-fluid ${styles.imagen}`}/>
      </div>
      <div className="container">
        { children }
      </div>

      <h3>Informacion</h3>
      <h3>Actualizaciones</h3>
      <h3>Otros Portales</h3>
      <Footer />
    </>
  )
}

export default Main
