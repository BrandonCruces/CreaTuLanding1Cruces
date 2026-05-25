import React, { useState } from 'react';
import mancuernaImg from '../assets/mancuernas.jpg';
import guantesImg from '../assets/guantes.jpg';
import barraImg from '../assets/barra.jpg';

export default function ItemListContainer({ mensaje }) {

  const [orden, setOrden] = useState("ninguno");

  const productosOriginales = [
    {
      id: 1,
      nombre: "Mancuernas 10kg",
      precio: 15000,
      imagen: mancuernaImg
    },
    {
      id: 2,
      nombre: "Guantes de Entrenamiento",
      precio: 8000,
      imagen: guantesImg
    },
    {
      id: 3,
      nombre: "Barra Olímpica",
      precio: 35000,
      imagen: barraImg
    }
  ];

  
  const productosOrdenados = [...productosOriginales].sort((a, b) => {
    if (orden === "menor") return a.precio - b.precio;
    if (orden === "mayor") return b.precio - a.precio;
    return 0; 
  });

  return (
    <div className="container mt-4">
      <div className="p-4 border rounded bg-light">
        <h2>{mensaje}</h2>
        <p className="text-muted">Catálogo de productos:</p>

        {}
        <div className="mb-3">
          <label className="fw-bold">Ordenar por precio:</label>
          <select
            className="form-select mt-2"
            value={orden}
            onChange={(e) => setOrden(e.target.value)}
          >
            <option value="ninguno">Sin ordenar</option>
            <option value="menor">Menor a mayor</option>
            <option value="mayor">Mayor a menor</option>
          </select>
        </div>

        {}
        <div className="row mt-3">
          {productosOrdenados.map((prod) => (
            <div className="col-md-4" key={prod.id}>
              <div className="card mb-3">
                <img src={prod.imagen} className="card-img-top" alt={prod.nombre} />
                <div className="card-body">
                  <h5 className="card-title">{prod.nombre}</h5>
                  <p className="card-text fw-bold">Precio: ${prod.precio}</p>
                  <button className="btn btn-primary btn-sm">Ver</button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
