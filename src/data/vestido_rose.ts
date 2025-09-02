
import { Product } from "@/interfaces/Product";

// Exemplo de como estruturar produtos com múltiplos tamanhos
export const vestido_rose: Product[] = [
  {
    id: 320,
    name: "Vestido Rose",  // Nome sem tamanho
    price: 100.00,
    images: [
      "/images/vestidos/vestido_rose/cores.jpeg",
    ],
    category: "Vestido",
    description: "Vestido Rose Varejo R$130,00",
    sku: "9090",
    inStock: true,
    colors: [
      { color: "Bordo", inStock: true },
      { color: "Beje", inStock: true },
      { color: "Cinza", inStock: true },
      { color: "Preto", inStock: true },
      { color: "Cinza Escuro", inStock: true },
      
    ],
    sizes: [
      { size: "P", inStock: true },
      { size: "M", inStock: true },
      { size: "G", inStock: true }
    ]
  },

  
];
