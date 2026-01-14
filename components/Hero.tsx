import React from 'react';
import { ArrowDown } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <header className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image - Nature/Scent abstract */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=2560)`, // Misty forest/nature
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.7) contrast(1.1)'
        }}
      ></div>

      {/* Overlay Gradient */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/20 via-transparent to-mandala-base"></div>

      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-4xl fade-in-up pt-10">
        <h2 className="text-white/90 text-sm md:text-lg tracking-[0.5em] mb-6 uppercase font-light">
          Natura • Rytuał • Harmonia
        </h2>
        <h1 className="text-5xl md:text-7xl lg:text-9xl font-serif text-white mb-8 leading-tight drop-shadow-lg">
          Lala <span className="italic font-light">Mandala</span>
        </h1>
        <p className="text-gray-100 text-lg md:text-xl mb-12 max-w-2xl mx-auto font-light leading-relaxed drop-shadow-md">
          Autorskie, naturalne kompozycje zapachowe tworzone z intencją oraz warsztaty, które pozwalają odkryć alchemię zapachu.
        </p>
        <a 
          href="#products" 
          className="inline-block px-10 py-4 border border-white text-white tracking-[0.2em] hover:bg-white hover:text-mandala-primary transition-all duration-500 font-medium uppercase text-sm backdrop-blur-sm"
        >
          Odkryj Zapachy
        </a>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 animate-bounce text-white/70">
        <ArrowDown className="w-6 h-6" />
      </div>
    </header>
  );
};