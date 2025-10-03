import { Product } from "@/interfaces/Product";

// Exemplo de como estruturar produtos com múltiplos tamanhos
export const conjunto_flor: Product[] = [
  {
    id: 67,
    name: "Conjunto Flor ",  // Nome sem tamanho
    price: 220.00,
    images: [
      
      "/images/conjuntos/conjunto_flor/rosa.jpeg",
      "/images/conjuntos/conjunto_flor/cores.jpeg",
    ],
    category: "Conjuntos",
    description: "Conjunto Flor 240,00 Varejo",
    sku: "67",
    inStock: true,
    colors: [
      { color: "Rosa", inStock: true },
      { color: "Azul Bebe", inStock: true },
      { color: "Offwhite", inStock: true },
      { color: "Amarelo", inStock: true },
      
    ],
    sizes: [
      { size: "P", inStock: true },
      { size: "M", inStock: true },
      { size: "G", inStock: true }
    ]
  },
  
];
