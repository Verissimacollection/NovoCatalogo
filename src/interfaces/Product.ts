
export interface ProductSize {
  size: string;
  inStock: boolean;
  quantity?: number;
}

export interface ProductColor {
  color: string;
  inStock: boolean;
  quantity?: number;
}

export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  images: string[];
  category: string;
  description: string;
  inStock: boolean;
  sku?: string;
  color?: string;
  colors?: ProductColor[];
  sizes?: ProductSize[];
  size?: string; // Mantido para compatibilidade com estrutura antiga
}
