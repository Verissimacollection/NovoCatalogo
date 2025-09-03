
import { Product } from "@/interfaces/Product";

// Exemplo de como estruturar produtos com múltiplos tamanhos
export const conjunto_bela: Product[] = [
  {
    id: 23,
    name: "Conjunto Bela",  // Nome sem tamanho
    price: 160.00,
    images: [
      "/images/conjuntos/conjunto_bela/verde.jpeg",
      "/images/conjuntos/conjunto_bela/cores.jpeg",
    ],
    category: "Conjuntos",
    description: "Conjunto Bela Varejo R&170,00 ",
    sku: "31",
    inStock: true,
    colors: [
      { color: "Rosa", inStock: true },
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
