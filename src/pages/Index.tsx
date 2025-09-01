
import React, { useState, useMemo } from 'react';
import Header from '@/components/Header';

import WhatsAppButton from '@/components/WhatsAppButton';
import Cart from '@/components/Cart';
import HeroSection from '@/components/HeroSection';
import ProductGrid from '@/components/ProductGrid';
import Footer from '@/components/Footer';
import ScrollToTopButton from '@/components/ScrollToTopButton';
import CartButton from '@/components/CartButton';
import { CartProvider } from '@/contexts/CartContext';
import { products } from '@/data/products';
import { Product } from '@/interfaces/Product';

const Index = () => {
  console.log('Index component rendering...');
  console.log('Products loaded:', products.length);
  
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = Array.from(new Set(products.map(product => product.category)));
  console.log('Categories:', categories);

  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           product.description.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchTerm]);

  console.log('Filtered products:', filteredProducts.length);

  const productCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    categories.forEach(category => {
      counts[category] = products.filter(p => p.category === category).length;
    });
    return counts;
  }, [categories]);

  const handleWhatsAppOrder = (product: Product) => {
    const message = `Olá! Tenho interesse no produto:

*${product.name}*
Preço: R$ ${product.price.toFixed(2).replace('.', ',')}

${product.description}

Poderia me dar mais informações?`;
    
    const phoneNumber = "5511987962867";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <CartProvider>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 overflow-x-hidden">
        <Header onSearch={setSearchTerm} />
        
        <HeroSection 
          categories={categories} 
          onCategorySelect={setSelectedCategory} 
        />

        <div className="container mx-auto px-3 sm:px-4 py-6 sm:py-8 max-w-full">
          <ProductGrid
            products={filteredProducts}
            onWhatsAppClick={handleWhatsAppOrder}
          />

          <ScrollToTopButton />
        </div>

        <Footer />

        <WhatsAppButton />
        <CartButton />
        <Cart />
      </div>
    </CartProvider>
  );
};

export default Index;
