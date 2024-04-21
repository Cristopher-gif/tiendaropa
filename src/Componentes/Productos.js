import React from 'react';

const Productos = () => {
  const products = [
    { id: 1, name: 'Camisa', price: 38.90, image: '../Imageness/camisa_nike.jpg' },
    { id: 2, name: 'Pantalón', price: 42.95, image: '../Imageness/pantalon_nike.jpg' },
    { id: 3, name: 'Zapatos', price: 128.90, image: '../Imageness/zapato_nike.jpg' },
  ];

  return (
    <div className="row">
      {products.map(product => (
        <div key={product.id} className="col-md-4 mb-4">
          <div className="card">
            <img src={product.image} className="card-img-top img-fluid" alt={product.name} />
            <div className="card-body">
              <h5 className="card-title">{product.name}</h5>
              <p className="card-text">Precio: ${product.price}</p>
              <button className="btn btn-primary">Comprar</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Productos;
