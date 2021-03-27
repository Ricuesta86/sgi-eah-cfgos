
import Link from 'next/link'
import styles from '../styles/Header.module.scss' 

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <Link href="/">
            <a className="navbar-brand">
              <img src="/icon.jpg" alt="Logo" className={styles.logo}/>
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
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  Home <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Link
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" href="#" aria-disabled="true">
                  Disabled
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header
