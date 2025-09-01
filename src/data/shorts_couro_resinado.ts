import { Product } from "@/interfaces/Product";

// Exemplo de como estruturar produtos com múltiplos tamanhos
export const shorts_couro_resinado: Product[] = [
  {
    id: 600,
    name: "Shorts Couro Resinada",  // Nome sem tamanho
    price: 65.00,
    images: [
      "/images/shorts/shorts_couro_resinado/cores.jpeg",
      
    ],
    category: "Shorts",
    description: "Shorts Couro Resinada R$80,00 Varejo R$65,00 Atacado ",
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
