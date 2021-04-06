
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
      <div className="container-fluid">
        { children }
      </div>
      <Footer />
    </>
  )
}

export default Main
