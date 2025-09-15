import { Product } from "@/interfaces/Product";

// Exemplo de como estruturar produtos com múltiplos tamanhos
export const conjunto_rita: Product[] = [
  {
    id: 16,
    name: "Conjunto Rita",  // Nome sem tamanho
    price: 170.00,
    images: [
      "/images/conjuntos/conjunto_rita/azulbebe.jpeg",
      "/images/conjuntos/conjunto_rita/cores.jpeg",
    ],
    category: "Conjuntos",
    description: "Conjunto Rita Varejo R$190,00",
    sku: "17",
    inStock: true,
    colors: [
      { color: "Azul Bebe", inStock: true },
      { color: "Bege", inStock: true },
      { color: "Preto", inStock: true },
      { color: "Verde", inStock: true },
      
    ],
    sizes: [
      { size: "P", inStock: true },
      { size: "M", inStock: true },
      { size: "G", inStock: true }
    ]
  },

  
];
