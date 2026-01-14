import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Products } from './components/Products';
import { Workshops } from './components/Workshops';
import { Contact } from './components/Contact';
import { Cart } from './components/Cart';
import { Product, CartItem } from './types';

const App: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleAddToCart = (product: Product) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => 
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1, selectedSize: product.sizes[1] }]; // Default to 50ml
    });
    setIsCartOpen(true);
  };

  const handleRemoveFromCart = (id: string) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen flex flex-col relative">
      <Navbar 
        cartCount={totalItems} 
        onCartClick={() => setIsCartOpen(true)} 
      />
      
      <main className="flex-grow">
        <Hero />
        <Products onAddToCart={handleAddToCart} />
        <About />
        <Workshops />
      </main>

      <Contact />

      <Cart 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        items={cartItems} 
        onRemoveItem={handleRemoveFromCart}
      />
    </div>
  );
};

export default App;