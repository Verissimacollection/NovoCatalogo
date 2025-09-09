import { Product } from "@/interfaces/Product";

// Exemplo de como estruturar produtos com múltiplos tamanhos
export const conjunto_sonia: Product[] = [
  {
    id: 41,
    name: "Conjunto Sonia ",  // Nome sem tamanho
    price: 180.00,
    images: [
      "/images/conjuntos/conjunto_sonia/nude.jpeg",
     "/images/conjuntos/conjunto_sonia/cores.jpeg",
     
    ],
    category: "Conjuntos",
    description: "Conjunto Sonia",
    sku: "41",
    inStock: true,
    colors: [
      { color: "Branco", inStock: true },
      { color: "Nude", inStock: true },
      { color: "Azul Bebe", inStock: true },
      { color: "Rosa Bebe", inStock: true },
      { color: "Amarelo", inStock: true },
      
      
    ],
    sizes: [
      { size: "P", inStock: true },
      { size: "M", inStock: true },
      { size: "G", inStock: true }
    ]
  },
  
];
