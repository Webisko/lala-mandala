import React from 'react';
import { Instagram, Mail, Facebook, ArrowUpRight } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <footer id="contact" className="bg-mandala-base pt-24 pb-12 border-t border-gray-200">
      <div className="container mx-auto px-6">
        
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-20">
          <div className="max-w-md">
            <h2 className="text-4xl md:text-5xl font-serif text-mandala-primary mb-6">
              Skontaktuj się
            </h2>
            <p className="text-gray-600 mb-8 text-lg">
              Masz pytania dotyczące produktów lub chcesz zarezerwować termin warsztatów? Napisz do mnie.
            </p>
            <a 
              href="mailto:lala.mandala@email.com" 
              className="inline-flex items-center gap-2 text-2xl font-serif text-mandala-terracotta hover:text-mandala-green transition-colors border-b border-mandala-terracotta pb-1"
            >
              lala.mandala@email.com
              <ArrowUpRight className="w-5 h-5" />
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
            <div>
              <h4 className="uppercase tracking-widest text-sm font-bold text-mandala-primary mb-6">Social Media</h4>
              <div className="flex flex-col gap-4">
                <a href="#" className="flex items-center gap-3 text-gray-600 hover:text-mandala-accent transition-colors">
                  <Instagram className="w-5 h-5" />
                  @lala_mandala_
                </a>
                 <a href="#" className="flex items-center gap-3 text-gray-600 hover:text-mandala-accent transition-colors">
                  <Facebook className="w-5 h-5" />
                  Lala Mandala
                </a>
              </div>
            </div>

            <div>
              <h4 className="uppercase tracking-widest text-sm font-bold text-mandala-primary mb-6">Menu</h4>
              <ul className="flex flex-col gap-3 text-gray-600">
                <li><a href="#about" className="hover:text-mandala-accent transition-colors">O Projekcie</a></li>
                <li><a href="#workshops" className="hover:text-mandala-accent transition-colors">Warsztaty</a></li>
                <li><a href="#products" className="hover:text-mandala-accent transition-colors">Sklep</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Lala Mandala. All rights reserved.</p>
          <p className="mt-2 md:mt-0 font-serif italic">Harmony Creator</p>
        </div>
      </div>
    </footer>
  );
};