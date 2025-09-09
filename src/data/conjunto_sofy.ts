import { Product } from "@/interfaces/Product";

// Exemplo de como estruturar produtos com múltiplos tamanhos
export const conjunto_sofy: Product[] = [
  {
    id: 39,
    name: "Conjunto Sofy ",  // Nome sem tamanho
    price: 180.00,
    images: [
      
      "/images/conjuntos/conjunto_sofy/cores.jpeg",
    ],
    category: "Conjuntos",
    description: "Conjunto Sofy ",
    sku: "39",
    inStock: true,
    colors: [
      { color: "Branco", inStock: true },
      { color: "Preto", inStock: true },
      { color: "Amarelo", inStock: true },
      { color: "Marrom", inStock: true },
     
  
      
    ],
    sizes: [
      { size: "P", inStock: true },
      { size: "M", inStock: true },
      { size: "G", inStock: true }
    ]
  },
  
];
