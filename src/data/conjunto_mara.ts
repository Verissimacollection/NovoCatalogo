import { Product } from "@/interfaces/Product";

// Exemplo de como estruturar produtos com múltiplos tamanhos
export const conjunto_mara: Product[] = [
  {
    id: 68,
    name: "Conjunto Mara ",  // Nome sem tamanho
    price: 220.00,
    images: [
      
      "/images/conjuntos/conjunto_mara/azul.jpeg",
      
    ],
    category: "Conjuntos",
    description: "Conjunto Mara 240,00 Varejo",
    sku: "68",
    inStock: true,
    colors: [
      
      { color: "Azul Bebe", inStock: true },
      
      
    ],
    sizes: [
      { size: "P", inStock: true },
      { size: "M", inStock: true },
      { size: "G", inStock: true }
    ]
  },
  
];
