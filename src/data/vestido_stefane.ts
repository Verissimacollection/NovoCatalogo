
import { Product } from "@/interfaces/Product";

// Exemplo de como estruturar produtos com múltiplos tamanhos
export const vestido_stefane: Product[] = [
  {
    id: 321,
    name: "Vestido Stefane",  // Nome sem tamanho
    price: 120.00,
    images: [
        "/images/vestidos/vestido_stefane/branco.jpeg",
      "/images/vestidos/vestido_stefane/cores.jpeg",
    ],
    category: "Vestido",
    description: "Vestido Stefane Varejo R$150,00",
    sku: "9091",
    inStock: true,
    colors: [
      { color: "Branco", inStock: true },
      { color: "Rosa Bebe", inStock: true },
      { color: "Amarelo", inStock: true },
      { color: "Marrom", inStock: true },
      { color: "Azul Bebe", inStock: true },
      
    ],
    sizes: [
      { size: "P", inStock: true },
      { size: "M", inStock: true },
      { size: "G", inStock: true },
      { size: "GG", inStock: true }
    ]
  },

  
];
