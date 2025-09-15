import { Product } from "@/interfaces/Product";

// Exemplo de como estruturar produtos com múltiplos tamanhos
export const conjunto_diana: Product[] = [
  {
    id: 42,
    name: "Conjunto Diana",  // Nome sem tamanho
    price: 170.00,
    images: [
    
      "/images/conjuntos/conjunto_diana/cores.jpeg",
    ],
    category: "Conjuntos",
    description: "Conjunto Diana Varejo R$190,00",
    sku: "42",
    inStock: true,
    colors: [
      { color: "Branco", inStock: true },
      { color: "Bege", inStock: true },
      { color: "Rosa", inStock: true },
      
      
    ],
    sizes: [
      { size: "P", inStock: true },
      { size: "M", inStock: true },
      { size: "G", inStock: true }
    ]
  },

  
];
