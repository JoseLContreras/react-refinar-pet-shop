import React, { useState } from 'react';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Catalog from './components/Catalog';
import './style.css';

const productos = [
  {
    id: 1,
    name: 'Collar para perro',
    description: 'Collar de cuero para perro',
    price: 10.99,
    image: 'https://example.com/collar-perro.jpg',
  },
  {
    id: 2,
    name: 'Juguete para gato',
    description: 'Juguete de pelota para gato',
    price: 5.99,
    image: 'https://example.com/juguete-gato.jpg',
  },
  {
    id: 3,
    name: 'Comida para perro',
    description: 'Comida seca para perro',
    price: 25.99,
    image: 'https://example.com/comida-perro.jpg',
  },
  {
    id: 4,
    name: 'Cama para gato',
    description: 'Cama suave para gato',
    price: 15.99,
    image: 'https://example.com/cama-gato.jpg',
  },
];

const App = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleSelect = (product) => {
    setSelectedProduct(product);
  };

  return (
    <>
      <NavBar background={'transparent'} />
      <Hero title="GARRITAS PET SHOP" />
      <h1>Nuestros productos</h1>
      <Catalog products={productos} onSelect={handleSelect} />
      {selectedProduct && (
        <div>
          <h2>Producto seleccionado:</h2>
          <p>{selectedProduct.name}</p>
          <p>${selectedProduct.price}</p>
        </div>
      )}
    </>
  );
};

export default App;
