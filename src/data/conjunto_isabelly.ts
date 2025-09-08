import { Product } from "@/interfaces/Product";

// Exemplo de como estruturar produtos com múltiplos tamanhos
export const conjunto_isabelly: Product[] = [
  {
    id: 34,
    name: "Conjunto Isabelly ",  // Nome sem tamanho
    price: 130.00,
    images: [
      "/images/conjuntos/conjunto_isabelly/verde.jpeg",
      "/images/conjuntos/conjunto_isabelly/verde_escuro.jpeg",
    ],
    category: "Conjuntos",
    description: "Conjunto Isabelly Varejo R$150,00",
    sku: "34",
    inStock: true,
    colors: [
      { color: "Verde", inStock: true },
      { color: "Verde Escuro", inStock: true },
       
    ],
    sizes: [
      { size: "P", inStock: true },
      { size: "M", inStock: true },
      { size: "G", inStock: true }
    ]
  },
  
];
