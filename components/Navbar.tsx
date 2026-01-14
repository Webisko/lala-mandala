import React, { useState, useEffect } from 'react';
import { ShoppingBag, Menu, X, Flower2 } from 'lucide-react';

interface NavbarProps {
  cartCount: number;
  onCartClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ cartCount, onCartClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'O Projekcie', href: '#about' },
    { name: 'Warsztaty', href: '#workshops' },
    { name: 'Kolekcja', href: '#products' },
    { name: 'Kontakt', href: '#contact' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-mandala-base/95 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <Flower2 className={`w-8 h-8 transition-colors ${isScrolled ? 'text-mandala-green' : 'text-mandala-primary'}`} />
          <div className="flex flex-col">
            <span className="font-serif text-2xl font-semibold tracking-widest text-mandala-primary leading-none">
              LALA MANDALA
            </span>
            <span className="text-[10px] tracking-[0.3em] uppercase text-mandala-accent">
              Harmony Creator
            </span>
          </div>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm tracking-widest uppercase hover:text-mandala-accent transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-px after:bg-mandala-accent after:transition-all hover:after:w-full"
            >
              {link.name}
            </a>
          ))}
          
          <button 
            onClick={onCartClick}
            className="relative p-2 hover:bg-mandala-primary/5 rounded-full transition-colors"
          >
            <ShoppingBag className="w-5 h-5" />
            {cartCount > 0 && (
              <span className="absolute top-0 right-0 w-4 h-4 bg-mandala-accent text-white text-[10px] flex items-center justify-center rounded-full">
                {cartCount}
              </span>
            )}
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <button 
            onClick={onCartClick}
            className="relative p-2"
          >
            <ShoppingBag className="w-5 h-5" />
            {cartCount > 0 && (
              <span className="absolute top-0 right-0 w-4 h-4 bg-mandala-accent text-white text-[10px] flex items-center justify-center rounded-full">
                {cartCount}
              </span>
            )}
          </button>
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-mandala-base border-t border-mandala-light shadow-lg py-4 px-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-lg font-serif"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};