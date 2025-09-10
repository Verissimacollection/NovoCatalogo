import { Product } from "@/interfaces/Product";

// Exemplo de como estruturar produtos com múltiplos tamanhos
export const shorts_couro_resinado: Product[] = [
  {
    id: 600,
    name: "Shorts Couro Resinada",  // Nome sem tamanho
    price: 70.00,
    images: [
      "/images/shorts/short_couro_resinado/cores.jpeg",
      
    ],
    category: "Shorts",
    description: "Shorts Couro Resinada Varejo R$80,00 Atacado ",
    sku: "2507",
    inStock: true,
    colors: [
      { color: "Preto", inStock: true },
      { color: "Marrom", inStock: true },
      { color: "Bege", inStock: true },
      { color: "Bege Escuro", inStock: true },
      
    ],
    sizes: [
      { size: "P", inStock: true },
      { size: "M", inStock: true },
      { size: "G", inStock: true },
    ]
  },

  
];
