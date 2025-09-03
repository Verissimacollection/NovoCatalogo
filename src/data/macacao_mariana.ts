import { Product } from "@/interfaces/Product";

// Exemplo de como estruturar produtos com múltiplos tamanhos
export const macacao_mariana: Product[] = [
  {
    id: 1001,
    name: "Macacão Mariana",  // Nome sem tamanho
    price: 170.00,
    images: [
      "/images/macacao/macacao_mariana/preto.jpeg",
      "/images/macacao/macacao_mariana/cores.jpeg",
    ],
    category: "Macacão",
    description: "Macacão Mariana Varejo R$190,00",
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
