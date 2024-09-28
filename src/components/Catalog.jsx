import React from 'react';
import ProductCard from './ProductCard';

const Catalog = ({ products, onSelect }) => {
  return (
    <div className="catalog">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} onSelect={onSelect} />
      ))}
    </div>
  );
};

export default Catalog;
