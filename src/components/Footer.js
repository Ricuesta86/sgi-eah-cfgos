import React from 'react'
import styles from '../styles/Footer.module.scss'

const Footer = () => {
    return (
        <footer className={`${styles.footer}`}>
            <div className={`row no-gutters text-center ${styles.row}`}>
                <div className="col-sm-12 col-lg-4 col-12 ">Footer 1</div>
                <div className="col-sm-12 col-lg-4 col-12 ">Footer 2</div>
                <div className="col-sm-12 col-lg-4 col-12 ">Footer 3</div>
            </div>
        </footer >
    )
}

export default Footer
