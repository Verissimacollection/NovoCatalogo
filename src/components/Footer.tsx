
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-16">
      <div className="container mx-auto px-4 text-center">
        <h3 className="text-xl font-semibold mb-2">Verissima New Collection Catálogo</h3>
        <p className="text-gray-400 mb-4">
          Produtos de qualidade com atendimento personalizado no WhatsApp
        </p>
        <div className="flex justify-center space-x-6 text-sm text-gray-400">
          <span>📞 (11) 9879-62867</span>
          <span></span>
          <span>🕐 Seg-Sab 7h às 15h</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
