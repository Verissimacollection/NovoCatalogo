import { Product } from "@/interfaces/Product";

// Exemplo de como estruturar produtos com múltiplos tamanhos
export const conjunto_australia: Product[] = [
  {
    id: 13,
    name: "Conjunto Australia ",  // Nome sem tamanho
    price: 170.00,
    images: [
      "/images/conjuntos/conjunto_australia/cinza.jpeg",
      "/images/conjuntos/conjunto_australia/cores.jpeg",
    ],
    category: "Conjuntos",
    description: "Conjunto Australia 190,00 Varejo",
    sku: "1546",
    inStock: true,
    colors: [
      { color: "Cinza", inStock: true },
      { color: "Verde", inStock: true },
      
      
    ],
    sizes: [
      { size: "P", inStock: true },
      { size: "M", inStock: true },
      { size: "G", inStock: true }
    ]
  },
  
];
