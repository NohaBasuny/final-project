import React from 'react'
import styles from './Navbar.module.css';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        
        <nav className={` ${styles.test} navbar navbar-expand-lg navbar-light`} >
        <div className="container-fluid">
          <a className="navbar-brand" to="#">Noxe</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              
              <li classNameName="nav-item">
                <a className="nav-link" to='home'>Home</a>
              </li>
              
               <li className="nav-item">
                <Link className="nav-link" to='about'> About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='details'>Details </Link>
              </li>
              <li className="nav-item">
                <link className="nav-link" to='people'>People </link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='networks'>Networks </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='tvshow'>Tvshow </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='movies'>Movies </Link>
              </li>
             
            </ul>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
               <div className="social-icons  d-flex align-items-center">
                 <i className="fab mx-2 fa-facebook"></i>
                 <i className="fab  mx-2 fa-spotify"></i>
                 <i className="fab mx-2 fa-instagram"></i>
                 <i className="fab mx-2 fa-youtube"></i>
               
               
               </div>
              
              <li classNameName="nav-item">
                <Link className="nav-link" to='login'>Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href='register'> Register</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='login'>Logout </Link>
              </li>
              </ul>
          </div> 
        </div>
      </nav>
    )
}
