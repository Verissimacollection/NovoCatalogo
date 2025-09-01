
import React from 'react';
import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    const message = "Olá! Vim pelo seu catálogo online e gostaria de saber mais sobre os produtos.";
    const phoneNumber = "5511947469227"; // Substitua pelo número real
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <Button
      onClick={handleWhatsAppClick}
      className="fixed bottom-40 right-6 h-12 w-12 rounded-full bg-whatsapp-500 hover:bg-whatsapp-600 shadow-lg hover:shadow-xl transition-all duration-300 z-50 animate-scale-in"
      size="icon"
    >
      <FaWhatsapp className="h-6 w-6 text-white" />
    </Button>
  );
};

export default WhatsAppButton;
