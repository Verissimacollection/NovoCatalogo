import { Product } from "@/interfaces/Product";

// Exemplo de como estruturar produtos com múltiplos tamanhos
export const conjunto_mia: Product[] = [
  {
    id: 4,
    name: "Conjunto Mia ",  // Nome sem tamanho
    price: 60.00,
    images: [
      "/images/conjunto/conjunto_mia/azulbebe.jpeg",
      "/images/conjunto/conjunto_mia/cores.jpeg",
    ],
    category: "Conjuntos",
    description: "Conjunto Mia disponível em múltiplos tamanhos",
    sku: "2213",
    inStock: true,
    colors: [
      { color: "Branco", inStock: true },
      { color: "Preto", inStock: true },
    ],
    sizes: [
      { size: "P", inStock: true },
      { size: "M", inStock: true },
      { size: "G", inStock: true }
    ]
  },
  
];
