import { Product } from "@/interfaces/Product";

// Exemplo de como estruturar produtos com múltiplos tamanhos
export const conjunto_mia: Product[] = [
  {
    id: 4,
    name: "Conjunto Mia ",  // Nome sem tamanho
    price: 170.00,
    images: [
      "/images/conjuntos/conjunto_mia/azulbebe.jpeg",
      "/images/conjuntos/conjunto_mia/cores.jpeg",
    ],
    category: "Conjuntos",
    description: "Conjunto Mia Varejo R$190,00",
    sku: "2213",
    inStock: true,
    colors: [
      { color: "Branco", inStock: true },
      { color: "Preto", inStock: true },
      { color: "Rosa Bebe", inStock: true },
      { color: "Azul Bebe", inStock: true },
      { color: "Bege", inStock: true },
    ],
    sizes: [
      { size: "P", inStock: true },
      { size: "M", inStock: true },
      { size: "G", inStock: true }
    ]
  },
  
];
