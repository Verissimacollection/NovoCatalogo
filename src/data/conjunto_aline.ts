
import { Product } from "@/interfaces/Product";

// Exemplo de como estruturar produtos com múltiplos tamanhos
export const conjunto_aline: Product[] = [
  {
    id: 27,
    name: "Conjunto Aline",  // Nome sem tamanho
    price: 170.00,
    images: [
      "/images/conjuntos/conjunto_aline/azulbebe.jpeg",
      "/images/conjuntos/conjunto_aline/cores.jpeg",
    ],
    category: "Conjuntos",
    description: "Conjunto Aline Varejo R&180,00 ",
    sku: "27",
    inStock: true,
    colors: [
      { color: "Branco", inStock: true },
      { color: "Azul Bebe", inStock: true },
      { color: "Preto", inStock: true },
      { color: "Marrom", inStock: true },
      { color: "Verde", inStock: true },
      
    ],
    sizes: [
      { size: "P", inStock: true },
      { size: "M", inStock: true },
      { size: "G", inStock: true }
    ]
  },

  
];
