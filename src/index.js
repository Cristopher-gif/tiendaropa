import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Puedes eliminar esta línea si no tienes un archivo index.css
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa los estilos de Bootstrap
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
