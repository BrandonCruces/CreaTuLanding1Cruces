import React from 'react';

export default function CartWidget({ count = 0 }) {
  return (
    <div className="d-flex align-items-center">
      {/* ícono del carrito */}
      <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-cart">
        <path d="M0 1a1 1 0 0 1 1-1h1.2a1 1 0 0 1 .96.73L3.89 3H14a1 1 0 0 1 .97 1.243l-1.5 6A1 1 0 0 1 12.5 11H5a1 1 0 0 1-.97-.757L2.61 2H1a1 1 0 0 1-1-1z"/>
      </svg>

      {/* número de productos */}
      <span style={{
        display: 'inline-block',
        minWidth: 20,
        textAlign: 'center',
        borderRadius: 12,
        background: '#e60000',
        color: '#fff',
        fontSize: 12,
        padding: '2px 6px',
        marginLeft: 6
      }}>
        {count}
      </span>
    </div>
  );
}
