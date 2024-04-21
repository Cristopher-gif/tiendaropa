import React from 'react';
import Inicio from './Componentes/Inicio';
import Final from './Componentes/Final';
import Productos from './Componentes/Productos';

function App() {
  return (
    <div>
      <Inicio />
      <div className="container mt-4">
        <h2 className="mb-4">Productos Destacados</h2>
        <Productos />
      </div>
      <Final />
    </div>
  );
}

export default App;
