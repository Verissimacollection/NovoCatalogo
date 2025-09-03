import { Product } from "@/interfaces/Product";

// Exemplo de como estruturar produtos com múltiplos tamanhos
export const macacao_solange: Product[] = [
  {
    id: 1000,
    name: "Macacão Solange",  // Nome sem tamanho
    price: 170.00,
    images: [
      "/images/macacao/verde.jpeg",
      "/images/macacao/cores.jpeg",
    ],
    category: "Macacão",
    description: "Macacão Solange R$190,00",
    sku: "1525",
    inStock: true,
    colors: [
      { color: "Marrom", inStock: true },
      { color: "Azul Bebe", inStock: true },
      { color: "Amarelo", inStock: true },
      { color: "Verde Militar", inStock: true },
      { color: "Preto", inStock: true },
     
    ],
    sizes: [
      { size: "P", inStock: true },
      { size: "M", inStock: true },
      { size: "G", inStock: true }
    ]
  },
  
];
