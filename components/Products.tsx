import React from 'react';
import { PRODUCTS } from '../constants';
import { Product } from '../types';
import { ShoppingCart, Wind, Droplets } from 'lucide-react';

interface ProductsProps {
  onAddToCart: (product: Product) => void;
}

export const Products: React.FC<ProductsProps> = ({ onAddToCart }) => {
  return (
    <div id="products" className="bg-mandala-base">
      
      {/* Introduction */}
      <div className="py-20 text-center container mx-auto px-6">
        <span className="text-mandala-accent uppercase tracking-[0.3em] text-xs font-bold">Kolekcja</span>
        <h2 className="text-4xl md:text-5xl font-serif mt-4 text-mandala-primary">Odkryj Swój Żywioł</h2>
        <div className="w-16 h-px bg-mandala-terracotta mx-auto mt-8"></div>
      </div>

      {/* Product Sections */}
      <div className="flex flex-col">
        {PRODUCTS.map((product, index) => (
          <section 
            key={product.id} 
            className={`py-20 lg:py-0 ${index % 2 === 0 ? 'bg-white' : 'bg-mandala-base'} overflow-hidden group`}
          >
            <div className="container mx-auto px-0 lg:px-6">
              <div className={`flex flex-col lg:flex-row items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                
                {/* Image Side */}
                <div className="w-full lg:w-1/2 h-[50vh] lg:h-[80vh] relative overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover transition-transform duration-[1.5s] ease-in-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/10"></div>
                </div>

                {/* Content Side */}
                <div className="w-full lg:w-1/2 p-10 lg:p-24 flex flex-col justify-center">
                  <div className="max-w-lg mx-auto lg:mx-0">
                    <span className="text-mandala-terracotta uppercase tracking-widest text-xs font-bold mb-4 block">
                      No. 0{index + 1}
                    </span>
                    <h2 className="text-5xl lg:text-7xl font-serif text-mandala-primary mb-6">
                      {product.name}
                    </h2>
                    
                    <div className="flex gap-4 mb-8 overflow-x-auto pb-2">
                      {product.scentProfile.map((note) => (
                        <span key={note} className="px-3 py-1 border border-mandala-light text-gray-500 text-xs uppercase tracking-wider whitespace-nowrap">
                          {note}
                        </span>
                      ))}
                    </div>

                    <p className="text-gray-600 text-lg leading-relaxed mb-8 font-light">
                      {product.longDescription}
                    </p>

                    <div className="grid grid-cols-2 gap-6 mb-10 text-sm text-gray-500">
                      <div className="flex items-center gap-3">
                        <Wind className="w-5 h-5 text-mandala-accent" />
                        <span>Naturalne olejki</span>
                      </div>
                      <div className="flex items-center gap-3">
                         <Droplets className="w-5 h-5 text-mandala-accent" />
                        <span>Długotrwały zapach</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-8 border-t border-gray-100 pt-8">
                      <span className="text-3xl font-serif text-mandala-primary">
                        {product.price} PLN
                      </span>
                      <button 
                        onClick={() => onAddToCart(product)}
                        className="bg-mandala-primary text-white px-8 py-4 uppercase tracking-[0.2em] text-xs font-bold hover:bg-mandala-green transition-colors flex items-center gap-3 shadow-lg hover:shadow-xl"
                      >
                        <ShoppingCart className="w-4 h-4" />
                        Do Koszyka
                      </button>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};