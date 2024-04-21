import React from 'react';

const Final = () => {
  return (
    <footer className="bg-dark text-white text-center p-3 mt-4">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5>Contacto</h5>
            <p>Email: lacasadelamoda@tiendaderopa.com</p>
            <p>Teléfono: 0959638029</p>
          </div>
          <div className="col-md-4">
            <h5>Redes Sociales</h5>
            <ul className="list-unstyled">
              <li><a href="#">Facebook</a></li>
              <li><a href="#">Twitter</a></li>
              <li><a href="#">Instagram</a></li>
              <li><a href="#">Tiktok</a></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Ubicación</h5>
            <p>Dirección: Rocafuerte, Machala, Ecuador</p>
          </div>
        </div>
        <hr />
        <p>&copy; {new Date().getFullYear()} Tienda de Ropa</p>
      </div>
    </footer>
  );
};

export default Final;
