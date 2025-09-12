import { Product } from "@/interfaces/Product";

// Exemplo de como estruturar produtos com múltiplos tamanhos
export const conjunto_cecilia: Product[] = [
  {
    id: 47,
    name: "Conjunto Cecilia ",  // Nome sem tamanho
    price: 130.00,
    images: [
      "/images/conjuntos/conjunto_cecilia/preto.jpeg",
     "/images/conjuntos/conjunto_cecilia/branco.jpeg",
     "/images/conjuntos/conjunto_cecilia/resa.jpeg",
    ],
    category: "Conjuntos",
    description: "Conjunto Cecilia 150,00 Varejo",
    sku: "47",
    inStock: true,
    colors: [
      { color: "Preto", inStock: true },
      { color: "Branco", inStock: true },
      { color: "Nude", inStock: true },
      
    ],
    sizes: [
      { size: "P", inStock: true },
      { size: "M", inStock: true },
      { size: "G", inStock: true }
    ]
  },
  
];
