import { Product } from "@/interfaces/Product";

// Exemplo de como estruturar produtos com múltiplos tamanhos
export const conjunto_paris: Product[] = [
  {
    id: 29,
    name: "Conjunto Paris ",  // Nome sem tamanho
    price: 130.00,
    images: [
      "/images/conjuntos/conjunto_paris/cores.jpeg",
      
    ],
    category: "Conjuntos",
    description: "Conjunto Paris 150,00 Varejo",
    sku: "29",
    inStock: true,
    colors: [
      { color: "Off White", inStock: true },
      { color: "Rosa Bebe", inStock: true },
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
