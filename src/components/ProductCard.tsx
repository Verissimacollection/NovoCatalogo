import React, { useState, useMemo } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MessageCircle, ShoppingCart } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { Product, ProductColor } from '@/interfaces/Product';
import { FaWhatsapp } from 'react-icons/fa';

interface ProductCardProps {
  product: Product;
  onWhatsAppClick: (product: Product) => void;
}

const formatPrice = (price: number): string => {
  return `R$ ${price.toFixed(2).replace('.', ',')}`;
};

export default function ProductCard({ product, onWhatsAppClick }: ProductCardProps) {
  const { addItem } = useCart();
  const [mainImage, setMainImage] = useState(product.images[0]);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [selectedColor, setSelectedColor] = useState<string>('');

  // Tamanhos disponíveis do produto
  const availableSizes = useMemo(() => {
    const sizeOrder = ['P', 'M', 'G', 'GG'];
    
    // Se o produto tem sizes definidos, usa eles
    if (product.sizes && product.sizes.length > 0) {
      return product.sizes
        .sort((a, b) => {
          const indexA = sizeOrder.indexOf(a.size);
          const indexB = sizeOrder.indexOf(b.size);
          return indexA - indexB;
        });
    }
    
    // Se não tem sizes mas tem size (compatibilidade com estrutura antiga)
    if (product.size) {
      return [{ size: product.size, inStock: product.inStock }];
    }
    
    return [];
  }, [product.sizes, product.size, product.inStock]);

  // Cores disponíveis do produto
  const availableColors = useMemo(() => {
    // Se o produto tem colors definidos, usa eles
    if (product.colors && product.colors.length > 0) {
      return product.colors;
    }
    
    // Se não tem colors mas tem color (compatibilidade com estrutura antiga)
    if (product.color) {
      return [{ color: product.color, inStock: product.inStock }];
    }
    
    return [];
  }, [product.colors, product.color, product.inStock]);

  // Verifica se o tamanho selecionado está em estoque
  const selectedSizeInfo = useMemo(() => {
    if (!selectedSize) return null;
    return availableSizes.find(s => s.size === selectedSize);
  }, [selectedSize, availableSizes]);

  // Verifica se a cor selecionada está em estoque
  const selectedColorInfo = useMemo(() => {
    if (!selectedColor) return null;
    return availableColors.find(c => c.color === selectedColor);
  }, [selectedColor, availableColors]);

  // Produto está disponível se tem tamanho e cor selecionados (se necessário) e estão em estoque
  const isProductAvailable = useMemo(() => {
    // Casos de compatibilidade com estrutura antiga (produto sem variações)
    if (availableSizes.length === 0 && availableColors.length === 0) {
      return product.inStock;
    }

    // Se tem variações de tamanho, deve ter um tamanho selecionado
    if (availableSizes.length > 0 && !selectedSize) {
      return false;
    }

    // Se tem variações de cor, deve ter uma cor selecionada
    if (availableColors.length > 0 && !selectedColor) {
      return false;
    }

    // Verifica se as seleções estão em estoque
    const sizeInStock = availableSizes.length === 0 || selectedSizeInfo?.inStock || false;
    const colorInStock = availableColors.length === 0 || selectedColorInfo?.inStock || false;

    return sizeInStock && colorInStock;
  }, [availableSizes, availableColors, selectedSize, selectedColor, selectedSizeInfo, selectedColorInfo, product.inStock]);

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  const handleAddToCart = () => {
    if (isProductAvailable) {
      addItem({ 
        ...product, 
        quantity,
        size: selectedSize || product.size,
        color: selectedColor || product.color
      });
      setQuantity(1);
    }
  };

  const handleWhatsAppClick = () => {
    if (isProductAvailable) {
      onWhatsAppClick({
        ...product,
        size: selectedSize || product.size,
        color: selectedColor || product.color
      });
    }
  };

  return (
    <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden bg-white border-gray-100">
      <div className="relative overflow-hidden">
        <img
          src={mainImage || '/fallback-image.jpg'}
          alt={product.name}
          className="w-full h-96 object-contain group-hover:scale-105 transition-transform duration-300"
          onError={(e) => (e.currentTarget.src = '/fallback-image.jpg')}
        />
        {discount > 0 && (
          <Badge className="absolute top-3 left-3 bg-orange-500 hover:bg-orange-600">
            -{discount}%
          </Badge>
        )}
        {!isProductAvailable && selectedSize && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <Badge variant="destructive" className="text-sm">
              Esgotado
            </Badge>
          </div>
        )}
      </div>

      {/* Miniaturas - máximo 6 fotos */}
      <div className="flex space-x-2 mt-2 px-4 overflow-x-auto">
        {product.images.slice(0, 6).map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`${product.name} thumbnail ${i + 1}`}
            className={`w-16 h-16 object-cover rounded cursor-pointer border-2 flex-shrink-0 ${
              img === mainImage ? 'border-green-600' : 'border-transparent'
            }`}
            onClick={() => setMainImage(img)}
            onError={(e) => (e.currentTarget.src = '/fallback-image.jpg')}
          />
        ))}
      </div>

      <CardContent className="p-4">
        <div className="space-y-2">
          <Badge variant="secondary" className="text-xs">
            {product.category}
          </Badge>

          <h3 className="font-semibold text-lg text-gray-900 line-clamp-2 group-hover:text-green-600 transition-colors">
            {product.name.replace(/Tamanho: [A-Z]+/, '').trim()}
          </h3>

          <p className="text-gray-600 text-sm line-clamp-2">{product.description}</p>

          {/* Seletor de cores */}
          {availableColors.length > 0 && (
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Cor:</label>
              <div className="flex flex-wrap gap-2">
                {availableColors.map((colorInfo) => {
                  const isSelected = selectedColor === colorInfo.color;
                  const isInStock = colorInfo.inStock;
                  
                  return (
                    <button
                      key={colorInfo.color}
                      onClick={() => setSelectedColor(colorInfo.color)}
                      disabled={!isInStock}
                      className={`px-3 py-2 border rounded-md text-sm font-medium transition-colors ${
                        isSelected 
                          ? 'bg-green-500 text-white border-green-500' 
                          : isInStock 
                            ? 'bg-white text-gray-700 border-gray-300 hover:border-green-500 hover:text-green-600' 
                            : 'bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed'
                      }`}
                    >
                      {colorInfo.color}
                      {!isInStock && <span className="text-xs block">Esgotado</span>}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Seletor de tamanho */}
          {availableSizes.length > 0 && (
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Tamanho:</label>
              <div className="flex flex-wrap gap-2">
                {availableSizes.map((sizeInfo) => {
                  const isSelected = selectedSize === sizeInfo.size;
                  const isInStock = sizeInfo.inStock;
                  
                  return (
                    <button
                      key={sizeInfo.size}
                      onClick={() => setSelectedSize(sizeInfo.size)}
                      disabled={!isInStock}
                      className={`px-3 py-2 border rounded-md text-sm font-medium transition-colors ${
                        isSelected 
                          ? 'bg-green-500 text-white border-green-500' 
                          : isInStock 
                            ? 'bg-white text-gray-700 border-gray-300 hover:border-green-500 hover:text-green-600' 
                            : 'bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed'
                      }`}
                    >
                      {sizeInfo.size}
                      {!isInStock && <span className="text-xs block">Esgotado</span>}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-green-600">
              {formatPrice(product.price)}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-gray-500 line-through">
                {formatPrice(product.originalPrice)}
              </span>
            )}
          </div>

          {/* Contador de quantidade */}
          <div className="flex items-center space-x-2">
            <button
              type="button"
              aria-label="Decrementar quantidade"
              onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
              className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-100"
            >
              -
            </button>
            <span className="w-6 text-center">{quantity}</span>
            <button
              type="button"
              aria-label="Incrementar quantidade"
              onClick={() => setQuantity((prev) => prev + 1)}
              className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-100"
            >
              +
            </button>
          </div>

          <div className="flex space-x-2 mt-2">
            <Button
              onClick={handleAddToCart}
              disabled={!isProductAvailable || 
                       (availableSizes.length > 0 && !selectedSize) || 
                       (availableColors.length > 0 && !selectedColor)}
              variant="outline"
              className="flex-1 border-green-500 text-green-600 hover:bg-green-50"
            >
              <ShoppingCart className="h-4 w-4 mr-2" />
              {isProductAvailable ? `Adicionar (${quantity})` : 'Indisponível'}
            </Button>

            <Button
              onClick={handleWhatsAppClick}
              disabled={!isProductAvailable || 
                       (availableSizes.length > 0 && !selectedSize) || 
                       (availableColors.length > 0 && !selectedColor)}
              className="flex-1 bg-green-500 hover:bg-green-600 text-white transition-colors duration-200"
            >
              <FaWhatsapp className="h-4 w-4 mr-2" />
              Comprar
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
