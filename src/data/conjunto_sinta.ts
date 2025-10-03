import { Product } from "@/interfaces/Product";

// Exemplo de como estruturar produtos com múltiplos tamanhos
export const conjunto_sinta: Product[] = [
  {
    id: 69,
    name: "Conjunto Cinta ",  // Nome sem tamanho
    price: 220.00,
    images: [
      
      "/images/conjuntos/conjunto_sinta/amarelo.jpeg",
      "/images/conjuntos/conjunto_sinta/cores.jpeg",
      "/images/conjuntos/conjunto_sinta/cores1.jpeg",
    ],
    category: "Conjuntos",
    description: "Conjunto Cinta 240,00 Varejo",
    sku: "69",
    inStock: true,
    colors: [
      { color: "Rosa", inStock: true },
      { color: "Azul Bebe", inStock: true },
      { color: "Offwhite", inStock: true },
      { color: "Amarelo", inStock: true },
      { color: "Preto", inStock: true },
      
    ],
    sizes: [
      { size: "P", inStock: true },
      { size: "M", inStock: true },
      { size: "G", inStock: true }
    ]
  },
  
];
