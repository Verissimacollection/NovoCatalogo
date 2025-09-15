import { Product } from "@/interfaces/Product";

// Exemplo de como estruturar produtos com múltiplos tamanhos
export const conjunto_estelar: Product[] = [
  {
    id: 32,
    name: "Conjunto Estela ",  // Nome sem tamanho
    price: 170.00,
    images: [
      "/images/conjuntos/conjunto_estelar/branco.jpeg",
      "/images/conjuntos/conjunto_estelar/bordo.jpeg",
    ],
    category: "Conjuntos",
    description: "Conjunto Estela Varejo R$180,00",
    sku: "32",
    inStock: true,
    colors: [
      { color: "Branco", inStock: true },
      { color: "Bordo", inStock: true },
       
    ],
    sizes: [
      { size: "P", inStock: true },
      { size: "M", inStock: true },
      { size: "G", inStock: true }
    ]
  },
  
];
