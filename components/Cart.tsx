import React from 'react';
import { X, Trash2 } from 'lucide-react';
import { CartItem } from '../types';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onRemoveItem: (id: string) => void;
}

export const Cart: React.FC<CartProps> = ({ isOpen, onClose, items, onRemoveItem }) => {
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60]">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>

      {/* Sidebar */}
      <div className="absolute top-0 right-0 h-full w-full max-w-md bg-white shadow-2xl flex flex-col transform transition-transform duration-300">
        <div className="p-6 flex justify-between items-center border-b border-gray-100">
          <h2 className="font-serif text-2xl text-mandala-primary">Twój Koszyk</h2>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-gray-400">
              <p className="text-lg mb-4">Twój koszyk jest pusty</p>
              <button 
                onClick={onClose}
                className="text-mandala-accent hover:text-mandala-terracotta font-medium"
              >
                Wróć do sklepu
              </button>
            </div>
          ) : (
            <div className="flex flex-col gap-6">
              {items.map((item) => (
                <div key={`${item.id}-${item.selectedSize}`} className="flex gap-4">
                  <div className="w-20 h-24 bg-gray-100 rounded-md overflow-hidden flex-shrink-0">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-1">
                      <h3 className="font-serif text-lg text-mandala-primary">{item.name}</h3>
                      <button 
                        onClick={() => onRemoveItem(item.id)}
                        className="text-gray-400 hover:text-red-400 transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                    <p className="text-sm text-gray-500 mb-2">{item.selectedSize}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-xs uppercase tracking-wider text-gray-400">Ilość: {item.quantity}</span>
                      <span className="font-medium text-mandala-terracotta">{item.price} PLN</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {items.length > 0 && (
          <div className="p-6 bg-mandala-base border-t border-gray-100">
            <div className="flex justify-between items-center mb-6">
              <span className="text-lg font-serif">Suma</span>
              <span className="text-xl font-medium text-mandala-primary">{total} PLN</span>
            </div>
            <button className="w-full py-4 bg-mandala-primary text-white uppercase tracking-widest text-sm font-bold hover:bg-mandala-green transition-colors">
              Przejdź do płatności
            </button>
          </div>
        )}
      </div>
    </div>
  );
};