import { Product } from "@/interfaces/Product";

// Exemplo de como estruturar produtos com múltiplos tamanhos
export const conjunto_lari: Product[] = [
  {
    id: 35,
    name: "Conjunto Lari ",  // Nome sem tamanho
    price: 160.00,
    images: [
      "/images/conjuntos/conjunto_lari/cores.jpeg",
      
    ],
    category: "Conjuntos",
    description: "Conjunto Lari Varejo R$170,00",
    sku: "35",
    inStock: true,
    colors: [
      { color: "Verde", inStock: true },
      { color: "Marrom", inStock: true },
       
    ],
    sizes: [
      { size: "P", inStock: true },
      { size: "M", inStock: true },
      { size: "G", inStock: true }
    ]
  },
  
];
