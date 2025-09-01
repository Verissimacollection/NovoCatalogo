
import React from 'react';

interface CartSummaryProps {
  total: number;
}

const formatPrice = (price: number): string => {
  return `R$ ${price.toFixed(2).replace('.', ',')}`;
};

const CartSummary = ({ total }: CartSummaryProps) => {
  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-base sm:text-lg font-semibold">Total:</span>
        <span className="text-xl sm:text-2xl font-bold text-whatsapp-600">
          {formatPrice(total)}
        </span>
      </div>
    </div>
  );
};

export default CartSummary;
