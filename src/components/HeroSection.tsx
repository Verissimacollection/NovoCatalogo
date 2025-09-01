import React from 'react';
import { Sparkles, ShoppingBag } from 'lucide-react';

interface HeroSectionProps {
  categories: string[];
  onCategorySelect: (category: string) => void;
}

const HeroSection = ({ categories, onCategorySelect }: HeroSectionProps) => {
  return (
    <section className="bg-[#f2eaea] text-gray-800 py-12 sm:py-16 overflow-x-hidden">
      <div className="container mx-auto px-3 sm:px-4 text-center max-w-full">
        {/* Título com sparkles */}
        <div className="flex items-center justify-center mb-4">
          <Sparkles className="h-8 w-8 mr-3 animate-pulse text-gray-800" />

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-black">
            Catálogo Premium
          </h2>

          <Sparkles className="h-8 w-8 ml-3 animate-pulse text-gray-800" />
        </div>

        {/* Subtítulo */}
        <p className="text-xl md:text-2xl mb-8 text-gray-700">
          Produtos selecionados com qualidade garantida
        </p>

        {/* Categorias */}
        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-2 max-w-5xl mx-auto">
          {/* Botão Todos */}
          <button
            onClick={() => onCategorySelect('all')}
            className="group bg-white shadow-sm border border-gray-200 rounded-lg p-2 
                      hover:bg-pink-100 hover:scale-105 transition-all duration-300 ease-out
                      active:scale-95 text-center"
          >
            <div className="flex flex-col items-center space-y-1">
              <div className="bg-pink-200 rounded-full p-1.5 group-hover:bg-pink-300 transition-colors duration-300">
                <ShoppingBag className="h-3 w-3 text-gray-800" />
              </div>
              <span className="text-xs font-medium text-gray-700 group-hover:text-gray-900 transition-colors duration-300 leading-tight">
                Todos
              </span>
            </div>
          </button>

          {/* Todas as Categorias */}
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => onCategorySelect(category)}
              className="group bg-white shadow-sm border border-gray-200 rounded-lg p-2 
                        hover:bg-pink-100 hover:scale-105 transition-all duration-300 ease-out
                        active:scale-95 text-center"
            >
              <div className="flex flex-col items-center space-y-1">
                <div className="bg-pink-200 rounded-full p-1.5 group-hover:bg-pink-300 transition-colors duration-300">
                  <ShoppingBag className="h-3 w-3 text-gray-800" />
                </div>
                <span className="text-xs font-medium text-gray-700 group-hover:text-gray-900 transition-colors duration-300 leading-tight">
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