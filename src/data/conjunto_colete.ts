import { Product } from "@/interfaces/Product";

// Exemplo de como estruturar produtos com múltiplos tamanhos
export const conjunto_colete: Product[] = [
  {
    id: 66,
    name: "Conjunto Colete ",  // Nome sem tamanho
    price: 220.00,
    images: [
      
      "/images/conjuntos/conjunto_colete/rosa.jpeg",
      "/images/conjuntos/conjunto_colete/cores.jpeg",
    ],
    category: "Conjuntos",
    description: "Conjunto Colete 240,00 Varejo",
    sku: "66",
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
