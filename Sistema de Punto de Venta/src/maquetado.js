import React, { useState } from 'react';

const Pos = () => {
  return (
    <div>
      <header>
                <h1>Sisteme Punto de Venta</h1>
            </header>
            <nav>
                <a href="#">Inicio</a>
                <a href="#">Productos</a>
                <a href="#">Contacto</a>
            </nav>
            <div className="container">
                <h2>Nuestros Productos</h2>
                <div className="productos">
                    <div className="producto">
                        <h3>Producto 1</h3>
                        <p>Descripción del Producto 1.</p>
                        <button>Agregar al Carrito</button>
                    </div>
                    <div className="producto">
                        <h3>Producto 2</h3>
                        <p>Descripción del Producto 2.</p>
                        <button>Agregar al Carrito</button>
                    </div>
                   
                </div>
            </div>
            <footer>
                <p>&copy; 2023 Punto de venta Ver.0.9. Todos los derechos reservados.</p>
            </footer>
    </div>
  );
};

export const PuntoDeVenta = () => {
  const [articulos, setArticulos] = useState([
    { id: 1, descripcion: 'Camisa', cantidad: 2, precio: 250 },
    { id: 2, descripcion: 'Pantalón', cantidad: 1, precio: 350 },
    { id: 3, descripcion: 'Zapatos', cantidad: 1, precio: 150 },
  ]);

  const calcularTotal = () => {
    return articulos.reduce((total, articulo) => total + articulo.cantidad * articulo.precio, 0);
  };

  return (
    <div className="punto-de-venta">
      <h2>Artículos en el Punto de Venta</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Descripción</th>
            <th>Cantidad</th>
            <th>Precio</th>
          </tr>
        </thead>
        <tbody>
          {articulos.map((articulo) => (
            <tr key={articulo.id}>
              <td>{articulo.id}</td>
              <td>{articulo.descripcion}</td>
              <td>{articulo.cantidad}</td>
              <td>${articulo.precio}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h3>Total: ${calcularTotal()}</h3>
    </div>
  );
};





export default Pos;