
import { Product } from "@/interfaces/Product";

// Exemplo de como estruturar produtos com múltiplos tamanhos
export const conjunto_michely: Product[] = [
  {
    id: 22,
    name: "Conjunto Michely",  // Nome sem tamanho
    price: 160.00,
    images: [
      "/images/conjuntos/conjunto_michely/azulbebe.jpeg",
      "/images/conjuntos/conjunto_michely/cores.jpeg",
    ],
    category: "Conjuntos",
    description: "Conjunto Michely Varejo R&170,00 ",
    sku: "2214",
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
