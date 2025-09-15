import { Product } from "@/interfaces/Product";

// Exemplo de como estruturar produtos com múltiplos tamanhos
export const conjunto_juliana: Product[] = [
  {
    id: 15,
    name: "Conjunto Juliana",  // Nome sem tamanho
    price: 170.00,
    images: [
      "/images/conjuntos/conjunto_juliana/branco.jpeg",
      "/images/conjuntos/conjunto_juliana/cores.jpeg",
    ],
    category: "Conjuntos",
    description: "Conjunto Juliana Verejo 190,00",
    sku: "1463",
    inStock: true,
    colors: [
      { color: "Branco", inStock: true },
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
