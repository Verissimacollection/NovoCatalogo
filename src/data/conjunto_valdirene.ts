import { Product } from "@/interfaces/Product";

// Exemplo de como estruturar produtos com múltiplos tamanhos
export const conjunto_valdirene: Product[] = [
  {
    id: 60,
    name: "Conjunto Valdirene ",  // Nome sem tamanho
    price: 190.00,
    images: [
      
      "/images/conjuntos/conjunto_valdirene/azul.jpeg",
    ],
    category: "Conjuntos",
    description: "Conjunto Valdirene 210,00 Varejo",
    sku: "60",
    inStock: true,
    colors: [
      { color: "Rosa", inStock: true },
      { color: "Azul Bebe", inStock: true },
      { color: "Verde", inStock: true },
      { color: "Amarelo", inStock: true },
      
    ],
    sizes: [
      { size: "P", inStock: true },
      { size: "M", inStock: true },
      { size: "G", inStock: true }
    ]
  },
  
];
