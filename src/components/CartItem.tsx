
import React from 'react';
import { Button } from '@/components/ui/button';
import { Plus, Minus, X } from 'lucide-react';
import { CartItem as CartItemType } from '@/contexts/CartContext';

interface CartItemProps {
  item: CartItemType;
  onUpdateQuantity: (uniqueId: string, quantity: number) => void;
  onRemoveItem: (uniqueId: string) => void;
}

const formatPrice = (price: number): string => {
  return `R$ ${price.toFixed(2).replace('.', ',')}`;
};

const CartItem = ({ item, onUpdateQuantity, onRemoveItem }: CartItemProps) => {
  return (
    <div className="bg-gray-50 rounded-lg p-3">
      <div className="flex space-x-3">
        {/* Imagem do produto */}
        <div className="flex-shrink-0">
          <img
            src={item.images[0] || '/fallback-image.jpg'}
            alt={item.name}
            className="w-16 h-16 object-cover rounded-lg"
            onError={(e) => (e.currentTarget.src = '/fallback-image.jpg')}
          />
        </div>
        
        {/* Informações do produto */}
        <div className="flex-1 min-w-0">
          <h3 className="font-medium text-sm line-clamp-2">{item.name}</h3>
          <p className="text-xs text-gray-500 mb-1">SKU: {item.sku}</p>
          {/* Variações do produto */}
          <div className="text-xs text-gray-500 mb-1 space-y-1">
            {(item.color || item.size) && (
              <div>
                {item.color && <span>Cor: {item.color}</span>}
                {item.color && item.size && <span> • </span>}
                {item.size && <span>Tamanho: {item.size}</span>}
              </div>
            )}
          </div>
          <p className="text-gray-500 text-sm line-clamp-2 mb-2">{item.description}</p>

          <div className="mt-1">
            <span className="text-whatsapp-600 font-semibold">
              {formatPrice(item.price)}
            </span>
          </div>

          <div className="flex items-center justify-between mt-2">
            <div className="inline-flex items-center space-x-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => onUpdateQuantity(item.uniqueId, item.quantity - 1)}
                className="h-8 w-8 p-0"
              >
                <Minus className="h-3 w-3" />
              </Button>
              <span className="inline-flex items-center text-sm font-medium min-w-[2rem] text-center">
                {item.quantity}
              </span>
              <Button
                variant="outline"
                size="sm"
                onClick={() => onUpdateQuantity(item.uniqueId, item.quantity + 1)}
                className="h-8 w-8 p-0"
              >
                <Plus className="h-3 w-3" />
              </Button>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onRemoveItem(item.uniqueId)}
              className="text-red-500 hover:text-red-700"
            >
              <X className="h-3 w-3" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
