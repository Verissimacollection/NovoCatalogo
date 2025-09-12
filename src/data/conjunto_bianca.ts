import { Product } from "@/interfaces/Product";

// Exemplo de como estruturar produtos com múltiplos tamanhos
export const conjunto_bianca: Product[] = [
  {
    id: 56,
    name: "Conjunto Bianca",  // Nome sem tamanho
    price: 130.00,
    images: [
      "/images/conjuntos/conjunto_bianca/cores.jpeg",
      "/images/conjuntos/conjunto_biaanca/cores1.jpeg",
    ],
    category: "Conjuntos",
    description: "Conjunto Bianca Varejo R$150,00",
    sku: "56",
    inStock: true,
    colors: [
      { color: "Verde", inStock: true },
      { color: "Azul Bebe", inStock: true },
      { color: "Branco", inStock: true },
      { color: "Preto", inStock: true },
      { color: "Nude", inStock: true },
      { color: "Marrom", inStock: true },
      { color: "Verde Militar", inStock: true },
      { color: "Bordo", inStock: true },
      { color: "Off White", inStock: true }
    ],
    sizes: [
      { size: "P", inStock: true },
      { size: "M", inStock: true },
      { size: "G", inStock: true }
    ]
  },

  
];
