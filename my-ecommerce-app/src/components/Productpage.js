// Productpage.js
import React, { useState, useEffect } from 'react';
import Header from './Header';
import ProductList from './ProductList';
import Cart from './Cart';
import Footer from './Footer';

function Productpage() {
    const [cart, setCart] = useState([]);
  
    useEffect(() => {
        const savedCart = localStorage.getItem('cart');
        if (savedCart) {
            setCart(JSON.parse(savedCart));
        }
    }, []);
  
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    const addToCart = (product) => {
        setCart(prev => {
          const existingProduct = prev.find(item => item.id === product.id);
          if (existingProduct) {
            return prev.map(item => 
              item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
            );
          } else {
            return [...prev, { ...product, quantity: 1 }];
          }
        });
    };
    
    const removeFromCart = (productId) => {
        setCart(prev => {
          const existingProduct = prev.find(item => item.id === productId);
          if (existingProduct && existingProduct.quantity > 1) {
            return prev.map(item => 
              item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
            );
          } else {
            return prev.filter(item => item.id !== productId);
          }
        });
    };
  
    return (
      <div className="product-page">
        <Header />
        <table>
          <tr>
            <td><ProductList addToCart={addToCart} /></td>
            <td style={{verticalAlign:'top'}}><Cart cartItems={cart} removeFromCart={removeFromCart}/></td>
          </tr>
        </table>
        <Footer />
      </div>
    );
}
  
export default Productpage