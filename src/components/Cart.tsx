import React, { useState } from 'react';
import { useCart } from '@/contexts/CartContext';
import { generateOrderPDF } from '@/utils/pdfGenerator';
import { toast } from '@/components/ui/use-toast';
import { ScrollArea } from '@/components/ui/scroll-area';
import DeliveryForm from './DeliveryForm';
import CartHeader from './CartHeader';
import CartItem from './CartItem';
import CartSummary from './CartSummary';
import CartActions from './CartActions';
import EmptyCart from './EmptyCart';

const formatPrice = (price: number): string => {
  return `R$ ${price.toFixed(2).replace('.', ',')}`;
};

const FRETE_LABELS: Record<string, string> = {
  onibus: 'Ônibus',
  correio: 'Correio',
  transportadora: 'Transportadora',
};

const Cart = () => {
  const {
    items,
    removeItem,
    updateQuantity,
    clearCart,
    getTotalPrice,
    getTotalPriceWithDiscount,
    getTotalQuantity,
    isOpen,
    setIsOpen,
  } = useCart();

  const [deliveryData, setDeliveryData] = useState({
    nome: '',
    endereco: '',
    numero: '',
    complemento: '',
    cidade: '',
    estado: '',
    cep: '',
    frete: ''
  });

  const totalItems = getTotalQuantity();
  const total = getTotalPrice();

  const isDeliveryDataValid = () => {
    return deliveryData.nome && 
           deliveryData.endereco && 
           deliveryData.numero &&
           deliveryData.cidade && 
           deliveryData.estado &&
           deliveryData.cep && 
           deliveryData.frete;
  };

  const handleWhatsAppOrder = () => {
    if (items.length === 0) return;

    if (!isDeliveryDataValid()) {
      toast({
        title: "Dados incompletos",
        description: "Por favor, preencha todos os dados de entrega.",
        variant: "destructive",
      });
      return;
    }

    let message = "🛒 *Meu Pedido:*\n\n";

    items.forEach((item, index) => {
      const itemSubtotal = item.price * item.quantity;

      message += `*${index + 1}. ${item.name}*\n`;
      message += `SKU: ${item.sku}\n`;
      if (item.color) {
        message += `Cor: ${item.color}\n`;
      }
      if (item.size) {
        message += `Tamanho: ${item.size}\n`;
      }
      message += `Quantidade: ${item.quantity}\n`;
      message += `Preço unitário: R$ ${formatPrice(item.price)}\n`;
      message += `Subtotal: R$ ${formatPrice(itemSubtotal)}\n`;
      message += "──────────────────────\n";
    });

    message += `\n💰 *Total:* ${formatPrice(total)}\n`;

    message += "\n📦 *Dados para Entrega:*\n";
    message += `👤 Nome: ${deliveryData.nome}\n`;
    message += `📍 Endereço: ${deliveryData.endereco}, nº ${deliveryData.numero}`;
    if (deliveryData.complemento) {
      message += `, ${deliveryData.complemento}`;
    }
    message += `\n`;
    message += `🏙️ Cidade: ${deliveryData.cidade}`;
    if (deliveryData.estado) {
      message += ` - ${deliveryData.estado}`;
    }
    message += `\n`;
    message += `📮 CEP: ${deliveryData.cep}\n`;

    const freteLabel = FRETE_LABELS[deliveryData.frete] || deliveryData.frete;
    message += `🚚 Frete: ${freteLabel} (consultar valor)\n`;

    message += "\n📞 Gostaria de finalizar este pedido!\nObrigado 😊";

    const phoneNumber = "5511947469227";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
    setIsOpen(false);
  };

  const handleGeneratePDF = () => {
    if (items.length === 0) {
      toast({
        title: "Carrinho vazio",
        description: "Adicione produtos ao carrinho para gerar o PDF.",
        variant: "destructive",
      });
      return;
    }

    if (!isDeliveryDataValid()) {
      toast({
        title: "Dados incompletos",
        description: "Por favor, preencha todos os dados de entrega antes de gerar o PDF.",
        variant: "destructive",
      });
      return;
    }

    try {
      const fileName = generateOrderPDF({
        items,
        total,
        totalQuantity: totalItems,
        deliveryData
      });
      
      toast({
        title: "PDF gerado!",
        description: `O arquivo "${fileName}" foi baixado com sucesso.`,
      });
    } catch (error) {
      console.error('Erro ao gerar PDF:', error);
      toast({
        title: "Erro",
        description: "Não foi possível gerar o PDF. Tente novamente.",
        variant: "destructive",
      });
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden" role="dialog" aria-modal="true">
      <div className="absolute inset-0 bg-black/50" onClick={() => setIsOpen(false)}></div>

      <div className="fixed right-0 top-0 h-full w-full max-w-full sm:max-w-md bg-white shadow-xl transform transition-transform duration-300 ease-in-out flex flex-col">
        <CartHeader 
          itemCount={items.length}
          totalQuantity={totalItems}
          onClose={() => setIsOpen(false)}
        />

        <div className="flex-1 overflow-hidden">
          {items.length === 0 ? (
            <div className="p-4">
              <EmptyCart />
            </div>
          ) : (
            <ScrollArea className="h-full">
              <div className="p-3 sm:p-4 pb-6 touch-pan-y">
                <div className="space-y-3">
                  {items.map((item) => (
                     <CartItem
                       key={item.id}
                       item={item}
                       onUpdateQuantity={updateQuantity}
                       onRemoveItem={removeItem}
                     />
                  ))}
                </div>


                <div className="mt-4">
                  <DeliveryForm
                    deliveryData={deliveryData}
                    onDeliveryDataChange={setDeliveryData}
                  />
                </div>
              </div>
            </ScrollArea>
          )}
        </div>

        {items.length > 0 && (
          <div className="sticky bottom-0 bg-white border-t shadow-lg">
            <div className="p-3 sm:p-4">
               <CartSummary
                 total={total}
               />
              
              <div className="mt-3 sm:mt-4">
                <CartActions
                  onWhatsAppOrder={handleWhatsAppOrder}
                  onGeneratePDF={handleGeneratePDF}
                  onClearCart={clearCart}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
