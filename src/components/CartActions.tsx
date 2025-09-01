
import React from 'react';
import { Button } from '@/components/ui/button';
import { MessageCircle, FileText } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

interface CartActionsProps {
  onWhatsAppOrder: () => void;
  onGeneratePDF: () => void;
  onClearCart: () => void;
}

const CartActions = ({ onWhatsAppOrder, onGeneratePDF, onClearCart }: CartActionsProps) => {
  return (
    <div className="space-y-2">
      <Button
        onClick={onWhatsAppOrder}
        className="w-full bg-whatsapp-500 hover:bg-whatsapp-600 text-white text-sm sm:text-base py-2.5 sm:py-3"
      >
        <FaWhatsapp className="h-4 w-4 mr-2" />
        Finalizar no WhatsApp
      </Button>

      <Button
        onClick={onGeneratePDF}
        variant="outline"
        className="w-full text-sm sm:text-base py-2.5 sm:py-3"
      >
        <FileText className="h-4 w-4 mr-2" />
        Gerar PDF
      </Button>

      <Button variant="outline" onClick={onClearCart} className="w-full text-sm sm:text-base py-2.5 sm:py-3">
        Limpar Carrinho
      </Button>
    </div>
  );
};

export default CartActions;
