import { Product } from "@/interfaces/Product";

// Exemplo de como estruturar produtos com múltiplos tamanhos
export const conjunto_tania: Product[] = [
  {
    id: 14,
    name: "Conjunto Tania ",  // Nome sem tamanho
    price: 100.00,
    images: [
      "/images/conjuntos/conjunto_tania/bordo.jpeg",
      "/images/conjuntos/conjunto_tania/cores.jpeg",
    ],
    category: "Conjuntos",
    description: "Conjunto Tania 130,00 Varejo",
    sku: "24",
    inStock: true,
    colors: [
      { color: "Bordo", inStock: true },
      { color: "Marrom", inStock: true },
      { color: "Azul Bebe", inStock: true },
      { color: "Bege", inStock: true },
      { color: "Preto", inStock: true },
      
      
    ],
    sizes: [
      { size: "P", inStock: true },
      { size: "M", inStock: true },
      { size: "G", inStock: true }
    ]
  },
  
];
