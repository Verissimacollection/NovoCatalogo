import { Product } from "@/interfaces/Product";

// Exemplo de como estruturar produtos com múltiplos tamanhos
export const conjunto_mary: Product[] = [
  {
    id: 17,
    name: "Conjunto Mary ",  // Nome sem tamanho
    price: 150.00,
    images: [
      "/images/conjuntos/conjunto_mary/verde.jpeg",
      "/images/conjuntos/conjunto_mary/cores.jpeg",
    ],
    category: "Conjuntos",
    description: "Conjunto Mary 170,00 Varejo",
    sku: "1437",
    inStock: true,
    colors: [
      { color: "Verde", inStock: true },
      { color: "Branco", inStock: true },
      { color: "Off White", inStock: true },
      { color: "Amarelo", inStock: true },
      { color: "Azul Bebe", inStock: true },
      
      
    ],
    sizes: [
      { size: "P", inStock: true },
      { size: "M", inStock: true },
      { size: "G", inStock: true }
    ]
  },
  
];
