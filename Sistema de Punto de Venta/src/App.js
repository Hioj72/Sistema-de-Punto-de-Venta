import React, { Component } from 'react';

class PuntoDeVenta extends Component {
  constructor(props) {
    super(props);
    this.state = {
      carrito: [],
      productoEscaneado: '',
      subtotal: 0,
    };
  }

  agregarProducto = () => {
    const { productoEscaneado, carrito } = this.state;

    // Simulamos una búsqueda en una base de datos de productos
    const productoEncontrado = buscarProductoEnBaseDeDatos(productoEscaneado);

    if (productoEncontrado) {
      // Agregar el producto al carrito
      const nuevoCarrito = [...carrito, productoEncontrado];

      // Calcular el nuevo subtotal
      const nuevoSubtotal = nuevoCarrito.reduce(
        (total, producto) => total + producto.precio,
        0
      );

      // Actualizar el estado
      this.setState({
        carrito: nuevoCarrito,
        productoEscaneado: '',
        subtotal: nuevoSubtotal,
      });
    } else {
      alert('Producto no encontrado');
    }
  };

  render() {
    const { carrito, productoEscaneado, subtotal } = this.state;

    return (
      <div>
        <h1>Sistema de Punto de Venta</h1>
        <input
          type="text"
          placeholder="Escanear producto"
          value={productoEscaneado}
          onChange={(e) =>
            this.setState({ productoEscaneado: e.target.value })
          }
        />
        <button onClick={this.agregarProducto}>Agregar al carrito</button>

        <h2>Carrito de Compras</h2>
        <ul>
          {carrito.map((producto, index) => (
            <li key={index}>{producto.nombre}</li>
          ))}
        </ul>

        <h3>Subtotal: ${subtotal.toFixed(2)}</h3>
      </div>
    );
  }
}

export default PuntoDeVenta;

// Simulación de búsqueda de productos en una base de datos
function buscarProductoEnBaseDeDatos(codigoDeBarras) {
  const productosEnBaseDeDatos = [
    { codigo: '12345', nombre: 'Producto 1', precio: 10.0 },
    { codigo: '67890', nombre: 'Producto 2', precio: 15.0 },
    // Agrega más productos aquí
  ];

  return productosEnBaseDeDatos.find(
    (producto) => producto.codigo === codigoDeBarras
  );
}

export default App;
