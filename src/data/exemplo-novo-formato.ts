import { Product } from "@/interfaces/Product";

// Exemplo de como estruturar produtos com múltiplos tamanhos
export const exemploProducts: Product[] = [
  {
    id: 1001,
    name: "Tule Liso",  // Nome sem tamanho
    price: 60.00,
    images: [
      "/images/tule/tuleamarelo1.jpeg",
      "/images/tule/Candytodas.jpeg",
    ],
    category: "Tule Manga Longa",
    description: "Tule liso disponível em múltiplos tamanhos",
    sku: "1300",
    inStock: true,
    color: "Amarelo",
    sizes: [
      { size: "P", inStock: true },
      { size: "M", inStock: true },
      { size: "G", inStock: false }, // Esgotado
      { size: "GG", inStock: true }
    ]
  },
  {
    id: 1002,
    name: "Tule Liso",
    price: 60.00,
    images: [
      "/images/tule/tuleazulnovo.jpeg",
      "/images/tule/Candytodas.jpeg",
    ],
    category: "Tule Manga Longa",
    description: "Tule liso disponível em múltiplos tamanhos",
    sku: "1300",
    inStock: true,
    color: "Azul",
    sizes: [
      { size: "P", inStock: true },
      { size: "M", inStock: true },
      { size: "G", inStock: true },
      { size: "GG", inStock: false } // Esgotado
    ]
  },
  // Produto com tamanho único (ainda suportado)
  {
    id: 1003,
    name: "Tricot Hot Fix Preto",
    price: 165.00,
    images: [
      "/images/tricothotfix/hotfixpreto.jpg",
      "/images/tricothotfix/hotfixpreto1.jpg"
    ],
    category: "Tricot Hot Fix",
    description: "Tamanho único",
    color: "Preto",
    size: "U", // Tamanho único usando estrutura antiga
    sku: "222",
    inStock: true
  }
];