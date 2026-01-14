import React from 'react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          
          {/* Text Content */}
          <div className="flex-1 order-2 lg:order-1">
            <span className="text-mandala-accent uppercase tracking-[0.2em] text-sm font-semibold mb-2 block">
              Filozofia
            </span>
            <h2 className="text-4xl md:text-5xl font-serif mb-8 text-mandala-primary">
              Tworzone z intencją
            </h2>
            
            <p className="text-lg text-gray-600 leading-relaxed mb-6 font-light">
              Projekt Lala Mandala powstał z głębokiej potrzeby tworzenia oraz wewnętrznej inspiracji do poszukiwania równowagi i sensu. 
              Moja praca to przekładanie emocji na zmysły – od malowania mandali, przez pracę z ciałem, aż po komponowanie unikalnych zapachów.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-10 font-light">
              Każda mgiełka jest komponowana ręcznie, kropla po kropli, z najwyższej jakości naturalnych olejków eterycznych. To nie tylko zapach – to narzędzie do pracy z nastrojem, emocjami i energią.
            </p>

            <div className="flex flex-wrap gap-8">
              <div className="flex flex-col">
                <span className="font-serif text-4xl text-mandala-terracotta">100%</span>
                <span className="text-xs uppercase tracking-widest text-gray-400 mt-1">Naturalne</span>
              </div>
              <div className="w-px bg-gray-200 h-12"></div>
              <div className="flex flex-col">
                 <span className="font-serif text-4xl text-mandala-terracotta">Hand</span>
                <span className="text-xs uppercase tracking-widest text-gray-400 mt-1">Made</span>
              </div>
              <div className="w-px bg-gray-200 h-12"></div>
              <div className="flex flex-col">
                 <span className="font-serif text-4xl text-mandala-terracotta">Vegan</span>
                <span className="text-xs uppercase tracking-widest text-gray-400 mt-1">Friendly</span>
              </div>
            </div>
          </div>

          {/* Image Grid */}
          <div className="flex-1 order-1 lg:order-2 relative">
             <div className="grid grid-cols-2 gap-4">
                <img 
                  src="https://images.unsplash.com/photo-1541625602330-2277a4c46182?auto=format&fit=crop&q=80&w=600" 
                  alt="Proces tworzenia" 
                  className="w-full h-80 object-cover rounded-sm shadow-xl mt-12 transform translate-y-4"
                />
                <img 
                  src="https://images.unsplash.com/photo-1506097425191-7ad538b29cef?auto=format&fit=crop&q=80&w=600" 
                  alt="Zioła i olejki" 
                  className="w-full h-80 object-cover rounded-sm shadow-xl mb-12 transform -translate-y-4"
                />
             </div>
             {/* Decorative element */}
             <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-mandala-accent/20 rounded-full blur-2xl -z-10"></div>
          </div>

        </div>
      </div>
    </section>
  );
};