// ProductList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Make sure to install axios with npm or yarn
import ProductItem from './ProductItem';

const ProductList = ({ addToCart }) => {
  const [products, setProducts] = useState([]); // Initialize products state as an empty array

  useEffect(() => {
    // Fetch products from your backend when the component mounts
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/products'); // Adjust the URL to where your backend is hosted
        setProducts(response.data); // Update the products state with the fetched data
      } catch (error) {
        console.error('Error fetching products:', error);
        // Handle error (e.g., show an error message)
      }
    };

    fetchProducts();
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <div>
      {products.map((product) => (
        <ProductItem key={product.id} product={product} addToCart={addToCart} />
      ))}
    </div>
  );
};

export default ProductList;