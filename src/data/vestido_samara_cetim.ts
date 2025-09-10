
import { Product } from "@/interfaces/Product";

// Exemplo de como estruturar produtos com múltiplos tamanhos
export const vestido_samara_cetim: Product[] = [
  {
    id: 323,
    name: "Vestido Samara de Cetim",  // Nome sem tamanho
    price: 170.00,
    images: [
      "/images/vestidos/vestido_samara_cetim/amarelo.jpeg",
      "/images/vestidos/vestido_samara_cetim/amarelo1.jpeg",
      "/images/vestidos/vestido_samara_cetim/cores1.jpeg",
      "/images/vestidos/vestido_samara_cetim/cores.jpeg",
    ],
    category: "Vestido",
    description: "Vestido Samara de Cetim Varejo R$190,00",
    sku: "323",
    inStock: true,
    colors: [
      { color: "Preto", inStock: true },
      { color: "Amarelo", inStock: true },
      { color: "Azul Bebe", inStock: true },
      { color: "Rosa Bebe", inStock: true },
      { color: "Branco", inStock: true },
      
    ],
    sizes: [
      { size: "P", inStock: true },
      { size: "M", inStock: true },
      { size: "G", inStock: true }
    ]
  },

  
];
