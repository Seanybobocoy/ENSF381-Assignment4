// ProductList.js
import React from 'react';
import ProductItem from './ProductItem'; // You'll need to create this component
import productsData from '../data/products'; // Adjust the path as needed

const ProductList = ({ addToCart }) => {
  return (
    <div>
      {productsData.map((product) => (
        <ProductItem key={product.id} product={product} addToCart={addToCart} />
      ))}
    </div>
  );
};

export default ProductList;