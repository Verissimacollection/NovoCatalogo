import { Product } from "@/interfaces/Product";

// Exemplo de como estruturar produtos com múltiplos tamanhos
export const conjunto_helena: Product[] = [
  {
    id: 19,
    name: "Conjunto Helena ",  // Nome sem tamanho
    price: 130.00,
    images: [
      "/images/conjuntos/conjunto_helena/bordo.jpeg",
    ],
    category: "Conjuntos",
    description: "Conjunto Helena 160,00 Varejo",
    sku: "1446",
    inStock: true,
    colors: [
      { color: "Off White", inStock: true },
      { color: "Preto", inStock: true },
      { color: "Azul Bebe", inStock: true },
      { color: "Verde", inStock: true },
      { color: "Mostarda", inStock: true },
      
      
    ],
    sizes: [
      { size: "P", inStock: true },
      { size: "M", inStock: true },
      { size: "G", inStock: true }
    ]
  },
  
];
