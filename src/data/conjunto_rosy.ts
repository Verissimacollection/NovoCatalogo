import { Product } from "@/interfaces/Product";

// Exemplo de como estruturar produtos com múltiplos tamanhos
export const conjunto_rosy: Product[] = [
  {
    id: 48,
    name: "Conjunto Rosy",  // Nome sem tamanho
    price: 190.00,
    images: [
      "/images/conjuntos/conjunto_rosy/branco.jpeg",
      "/images/conjuntos/conjunto_rosy/amarelo.jpeg",
      "/images/conjuntos/conjunto_rosy/marinho.jpeg",
      "/images/conjuntos/conjunto_rosy/azul.jpeg",
      "/images/conjuntos/conjunto_rosy/rosa.jpeg",
      "/images/conjuntos/conjunto_rosy/cores.jpeg",
      
    ],
    category: "Conjuntos",
    description: "Conjunto Rosy",
    sku: "48",
    inStock: true,
    colors: [
      { color: "Branco", inStock: true },
      { color: "Azul Bebe", inStock: true },
      { color: "Amarelo", inStock: true },
      { color: "Marinho", inStock: true },
      { color: "Rosa", inStock: true },
      
    ],
    sizes: [
      { size: "P", inStock: true },
      { size: "M", inStock: true },
      { size: "G", inStock: true }
    ]
  },

  
];
