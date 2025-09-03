import { Product } from "@/interfaces/Product";

// Exemplo de como estruturar produtos com múltiplos tamanhos
export const conjunto_paula: Product[] = [
  {
    id: 20,
    name: "Conjunto Paula ",  // Nome sem tamanho
    price: 150.00,
    images: [
      "/images/conjuntos/conjunto_paula/azulbebe.jpeg",
      "/images/conjuntos/conjunto_paula/cores.jpeg",
    ],
    category: "Conjuntos",
    description: "Conjunto Paula 170,00 Varejo",
    sku: "3105",
    inStock: true,
    colors: [
      { color: "Off White", inStock: true },
      { color: "Rosa Bebe", inStock: true },
      { color: "Azul Bebe", inStock: true },
      { color: "Bege", inStock: true },
      { color: "Preto", inStock: true },
      
      
    ],
    sizes: [
      { size: "P", inStock: true },
      { size: "M", inStock: true },
      { size: "G", inStock: true }
    ]
  },
  
];
