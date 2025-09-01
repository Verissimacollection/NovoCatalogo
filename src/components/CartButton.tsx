import React from 'react';
import { Button } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';

const CartButton = () => {
  const { getTotalQuantity, setIsOpen } = useCart();
  const totalQuantity = getTotalQuantity();

  const handleCartClick = () => {
    setIsOpen(true);
  };

  return (
    <Button
      onClick={handleCartClick}
      className="fixed bottom-24 right-6 h-12 w-12 rounded-full bg-orange-500 hover:bg-orange-600 shadow-lg hover:shadow-xl transition-all duration-300 z-50 animate-scale-in"
      size="icon"
    >
      <div className="relative">
        <ShoppingCart className="h-6 w-6 text-white" />
        {totalQuantity > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">
            {totalQuantity}
          </span>
        )}
      </div>
    </Button>
  );
};

export default CartButton;