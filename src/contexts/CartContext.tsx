
// src/contexts/CartContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Product } from '@/interfaces/Product';

export interface CartItem {
  id: number;
  uniqueId: string; // Identificador único que inclui id + tamanho + cor
  name: string;
  price: number;
  images: string[];
  description: string;
  quantity: number;
  sku: string;
  color?: string;
  size?: string;
}

interface CartContextType {
  items: CartItem[];
  addItem: (product: Product & { quantity?: number; size?: string; color?: string }) => void;
  removeItem: (uniqueId: string) => void;
  updateQuantity: (uniqueId: string, quantity: number) => void;
  clearCart: () => void;
  getTotalItems: () => number;
  getTotalQuantity: () => number;
  getTotalPrice: () => number;
  getTotalPriceWithDiscount: () => number;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const addItem = (product: Product & { quantity?: number; size?: string; color?: string }) => {
    const { quantity: desiredQuantity = 1 } = product;
    
    // Criar identificador único baseado no id + tamanho + cor
    const uniqueId = `${product.id}-${product.size || 'no-size'}-${product.color || 'no-color'}`;

    setItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.uniqueId === uniqueId);

      if (existingItem) {
        return prevItems.map((item) =>
          item.uniqueId === uniqueId
            ? { 
                ...item, 
                quantity: item.quantity + desiredQuantity,
              }
            : item
        );
      }

      return [
        ...prevItems,
        {
          id: product.id,
          uniqueId: uniqueId,
          name: product.name,
          price: product.price,
          images: product.images || [],
          description: product.description || 'Descrição não disponível',
          quantity: desiredQuantity,
          sku: product.sku || `SKU-${product.id}`,
          color: product.color,
          size: product.size,
        },
      ];
    });
  };

  const removeItem = (uniqueId: string) => {
    setItems((prevItems) => prevItems.filter((item) => item.uniqueId !== uniqueId));
  };

  const updateQuantity = (uniqueId: string, quantity: number) => {
    if (quantity <= 0) {
      removeItem(uniqueId);
      return;
    }

    setItems((prevItems) =>
      prevItems.map((item) => (item.uniqueId === uniqueId ? { ...item, quantity } : item))
    );
  };

  const clearCart = () => {
    setItems([]);
  };

  const getTotalItems = () => {
    return items.length;
  };

  const getTotalQuantity = () => {
    return items.reduce((total, item) => total + item.quantity, 0);
  };

  const getTotalPrice = () => {
    return items.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const getTotalPriceWithDiscount = () => {
    return getTotalPrice();
  };

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        getTotalItems,
        getTotalQuantity,
        getTotalPrice,
        getTotalPriceWithDiscount,
        isOpen,
        setIsOpen,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
