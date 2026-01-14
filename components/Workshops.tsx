import React from 'react';
import { WORKSHOPS } from '../constants';
import { Clock, MapPin, Users, Sparkles } from 'lucide-react';

export const Workshops: React.FC = () => {
  const workshop = WORKSHOPS[0];

  return (
    <section id="workshops" className="py-24 bg-mandala-primary text-white relative overflow-hidden">
      {/* Abstract Background Element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-mandala-green opacity-10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <div className="w-full lg:w-1/2">
            <div className="relative rounded-lg overflow-hidden shadow-2xl border-4 border-white/5">
              <img 
                src={workshop.image} 
                alt="Warsztaty perfumiarskie" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-mandala-primary/80 to-transparent flex items-end p-8">
                 <div className="bg-white/10 backdrop-blur-md p-4 rounded-lg inline-flex items-center gap-3">
                    <Sparkles className="text-mandala-accent" />
                    <span className="uppercase tracking-widest text-sm font-semibold">Odkryj magię zapachu</span>
                 </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <span className="text-mandala-accent uppercase tracking-[0.2em] text-sm font-semibold mb-2 block">
              Edukacja & Doświadczenie
            </span>
            <h2 className="text-4xl md:text-6xl font-serif mb-8 text-white">
              {workshop.title}
            </h2>
            
            <p className="text-gray-300 text-lg leading-relaxed mb-10">
              {workshop.description} To przestrzeń do eksperymentowania, gdzie węch spotyka się z intuicją.
              Stwórz kompozycję, która będzie Twoją wizytówką lub idealnym prezentem.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/5 rounded-full text-mandala-accent">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-serif text-lg mb-1">Czas trwania</h4>
                  <p className="text-gray-400 text-sm">{workshop.duration}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                 <div className="p-3 bg-white/5 rounded-full text-mandala-accent">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-serif text-lg mb-1">Lokalizacja</h4>
                  <p className="text-gray-400 text-sm">{workshop.location}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                 <div className="p-3 bg-white/5 rounded-full text-mandala-accent">
                  <Users className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-serif text-lg mb-1">Grupy</h4>
                  <p className="text-gray-400 text-sm">Indywidualne, Firmowe, Wieczory panieńskie</p>
                </div>
              </div>
            </div>

            <button className="bg-mandala-accent text-mandala-primary px-10 py-4 uppercase tracking-widest font-bold hover:bg-white transition-colors duration-300 rounded-sm">
              Zapisz się na warsztat
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};