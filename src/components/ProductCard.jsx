import React from 'react';

const ProductCard = ({ product, onSelect }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>${product.price}</p>
      <button onClick={() => onSelect(product)}>Seleccionar</button>
    </div>
  );
};

export default ProductCard;
