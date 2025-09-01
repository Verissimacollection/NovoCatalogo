import { Product } from "@/interfaces/Product";

// Exemplo de como estruturar produtos com múltiplos tamanhos
export const conjunto_gabriela: Product[] = [
  {
    id: 8,
    name: "Conjunto Gabriela ",  // Nome sem tamanho
    price: 170.00,
    images: [
      "/images/conjuntos/conjunto_gabriela/amarelo.jpeg",
      "/images/conjuntos/conjunto_gabriela/cores.jpeg",
    ],
    category: "Conjuntos",
    description: "Conjunto Gabriela Varejo R$190,00",
    sku: "6033",
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
