import { Product } from "@/interfaces/Product";

// Exemplo de como estruturar produtos com múltiplos tamanhos
export const conjunto_vivian: Product[] = [
  {
    id: 7,
    name: "Conjunto Vivian ",  // Nome sem tamanho
    price: 170.00,
    images: [
      "/images/conjunto/conjunto_vivian/offwhite.jpeg",
      "/images/conjunto/conjunto_vivian/cores.jpeg",
    ],
    category: "Conjuntos",
    description: "Conjunto Vivian 190,00 Varejo",
    sku: "7236",
    inStock: true,
    colors: [
      { color: "Off White", inStock: true },
      { color: "Amarelo", inStock: true },
      { color: "Azul Bebe", inStock: true },
      { color: "Verde", inStock: true },
      { color: "Preto", inStock: true },
      
    ],
    sizes: [
      { size: "P", inStock: true },
      { size: "M", inStock: true },
      { size: "G", inStock: true }
    ]
  },
  
];
