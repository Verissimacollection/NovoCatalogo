import { Product } from "@/interfaces/Product";

// Exemplo de como estruturar produtos com múltiplos tamanhos
export const conjunto_franca: Product[] = [
  {
    id: 46,
    name: "Conjunto França ",  // Nome sem tamanho
    price: 150.00,
    images: [
      "/images/conjuntos/conjunto_franca/amarelo.jpeg",
      "/images/conjuntos/conjunto_franca/cores.jpeg",
    ],
    category: "Conjuntos",
    description: "Conjunto França 170,00 Varejo",
    sku: "46",
    inStock: true,
    colors: [
      { color: "Verde", inStock: true },
      { color: "Branco", inStock: true },
      { color: "Azul Bebe", inStock: true },
      { color: "Amarelo", inStock: true },
      { color: "Preto", inStock: true },
      
      
    ],
    sizes: [
      { size: "P", inStock: true },
      { size: "M", inStock: true },
      { size: "G", inStock: true }
    ]
  },
  
];
