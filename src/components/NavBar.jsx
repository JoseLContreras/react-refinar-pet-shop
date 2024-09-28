import React from 'react';
import CartWidget from './CartWidget';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import './styles/NavBar.css';

const NavBar = ({ background }) => {
  //Declaro una variable donde voy a almacenar la ruta de la imagen que quiero mostrar
  const brand =
    'data:image/png;base64,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';

  return (
    <header className={`header background--${background}`}>
      <div className="header-container">
        <div className="menu-button">
          <FontAwesomeIcon icon={faBars} size="lg" color="white" />
          <span>Menu</span>
        </div>
        <nav>
          <ul className="nav-container">
            <li>
              <a href="/">Inicio</a>
            </li>
            <li className="products-item">
              <a href="/">
                Productos <span className="arrow"></span>
              </a>
              <ul className="dropdown">
                <li>
                  <a href="/categoria1">Caninos</a>
                </li>
                <li>
                  <a href="/categoria2">Felinos</a>
                </li>
                <li>
                  <a href="/categoria3">Aves</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="/">Blog</a>
            </li>
            <li>
              <a href="/">Contacto</a>
            </li>
          </ul>
        </nav>
        <div className="logo-container">
          <img src="logo" alt="logo" />
        </div>

        {/* cart widget */}
        <CartWidget />
      </div>
    </header>
  );
};

export default NavBar;
