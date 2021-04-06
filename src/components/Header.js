import Link from 'next/link'
import styles from '../styles/Header.module.scss'

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <Link href="/">
            <a className="navbar-brand">
              <img src="/icon.jpg" alt="Logo" className={styles.logo} />
              EAH Cfgos
            </a>
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <li className="nav-item">
                <Link href="http://www.cfg.giat.cu">
                  <a className="nav-link" target="blank">
                    Intranet
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="https://correo.cfg.giat.cu">
                  <a className="nav-link" target="blank">
                    Correo
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="http://cmi.cfg.giat.cu">
                  <a className="nav-link" target="blank">
                    CMI
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header
