import { Product } from "@/interfaces/Product";

// Exemplo de como estruturar produtos com múltiplos tamanhos
export const macacao_mariana: Product[] = [
  {
    id: 1001,
    name: "Macacão ",  // Nome sem tamanho
    price: 60.00,
    images: [
      "/images/macacao_mariana/preto.jpeg",
      "/images/macacao_mariana/cores.jpeg",
    ],
    category: "Macacão",
    description: "Macacão disponível em múltiplos tamanhos",
    sku: "1521",
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
