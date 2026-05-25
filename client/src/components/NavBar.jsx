import React from 'react';
import CartWidget from './CartWidget';

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light navbar-custom px-4">
      <div className="container-fluid">
        <a className="navbar-brand d-flex align-items-center" href="/">
          {}
          <div className="logo-text me-2">crucestraining_</div>
          <small style={{color: '#666'}}>tienda</small>
        </a>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navMenu">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navMenu">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="/">Inicio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/productos">Productos</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/contacto">Contacto</a>
            </li>
          </ul>

          {}
          <div className="d-flex">
            <CartWidget count={0} />
          </div>
        </div>
      </div>
    </nav>
  );
}
