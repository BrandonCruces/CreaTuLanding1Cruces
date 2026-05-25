import React from 'react';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  const mensajeBienvenida = "Bienvenido a CrucesTraining_ — Explora nuestros productos";
  return (
    <div>
      <NavBar />
      {}
      <ItemListContainer mensaje={mensajeBienvenida} />
    </div>
  );
}

export default App;
