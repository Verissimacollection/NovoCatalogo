import React from 'react';
import { Sparkles, ShoppingBag } from 'lucide-react';

interface HeroSectionProps {
  categories: string[];
  onCategorySelect: (category: string) => void;
}

const HeroSection = ({ categories, onCategorySelect }: HeroSectionProps) => {
  return (
    <section className="bg-[#b37c74] text-white py-12 sm:py-16 overflow-x-hidden">
      <div className="container mx-auto px-3 sm:px-4 text-center max-w-full">
        {/* Título com sparkles */}
        <div className="flex items-center justify-center mb-4">
          <Sparkles className="h-8 w-8 mr-3 animate-pulse text-white" />
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold">Catálogo Premium</h2>
          <Sparkles className="h-8 w-8 ml-3 animate-pulse text-white" />
        </div>

        {/* Subtítulo com bloco fixo e estilizado */}
        <p className="text-xl md:text-2xl mb-8 text-white/90">
          Produtos selecionados com qualidade garantida<br />

          
        </p>

        {/* Categorias */}
        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-2 max-w-5xl mx-auto">
          {/* Botão Todos */}
          <button
            onClick={() => onCategorySelect('all')}
            className="group bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-2 
                      hover:bg-white/20 hover:scale-105 transition-all duration-300 ease-out
                      active:scale-95 text-center"
          >
            <div className="flex flex-col items-center space-y-1">
              <div className="bg-white/20 rounded-full p-1.5 group-hover:bg-white/30 transition-colors duration-300">
                <ShoppingBag className="h-3 w-3 text-white" />
              </div>
              <span className="text-xs font-medium text-white/90 group-hover:text-white transition-colors duration-300 leading-tight">
                Todos
              </span>
            </div>
          </button>
          
          {/* Todas as Categorias */}
          {categories.map((category, index) => (
            <button
              key={category}
              onClick={() => onCategorySelect(category)}
              className="group bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-2 
                        hover:bg-white/20 hover:scale-105 transition-all duration-300 ease-out
                        active:scale-95 text-center"
            >
              <div className="flex flex-col items-center space-y-1">
                <div className="bg-white/20 rounded-full p-1.5 group-hover:bg-white/30 transition-colors duration-300">
                  <ShoppingBag className="h-3 w-3 text-white" />
                </div>
                <span className="text-xs font-medium text-white/90 group-hover:text-white transition-colors duration-300 leading-tight">
                  {category}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;