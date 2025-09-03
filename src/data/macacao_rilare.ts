import { Product } from "@/interfaces/Product";

// Exemplo de como estruturar produtos com múltiplos tamanhos
export const macacao_rilare: Product[] = [
  {
    id: 1002,
    name: "Macacão Rilare",  // Nome sem tamanho
    price: 150.00,
    images: [
      "/images/macacao/macacao_rilare/bordo.jpeg",
      "/images/macacao/macacao_rilare/cores.jpeg",
    ],
    category: "Macacão",
    description: "Macacão Rilare Varejo R$170,00",
    sku: "241019",
    inStock: true,
    colors: [
      { color: "Bordo", inStock: true },
      { color: "Branco", inStock: true },
      { color: "Bege", inStock: true },
      { color: "Azul Bebe", inStock: true },
      { color: "Marinho", inStock: true },
     
    ],
    sizes: [
      { size: "P", inStock: true },
      { size: "M", inStock: true },
      { size: "G", inStock: true }
    ]
  },
  
];
