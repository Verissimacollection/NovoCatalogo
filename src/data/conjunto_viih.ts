import { Product } from "@/interfaces/Product";

// Exemplo de como estruturar produtos com múltiplos tamanhos
export const conjunto_viih: Product[] = [
  {
    id: 12,
    name: "Conjunto Viih ",  // Nome sem tamanho
    price: 170.00,
    images: [
      "/images/conjuntos/conjunto_viih/verde.jpeg",
      "/images/conjuntos/conjunto_viih/cores.jpeg",
    ],
    category: "Conjuntos",
    description: "Conjunto Viih 190,00 Varejo",
    sku: "23",
    inStock: true,
    colors: [
      { color: "Rosa", inStock: true },
      { color: "Marrom", inStock: true },
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
