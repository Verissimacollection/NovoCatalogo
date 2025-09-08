import { Product } from "@/interfaces/Product";

// Exemplo de como estruturar produtos com múltiplos tamanhos
export const blusa_alexia: Product[] = [
  {
    id: 2500,
    name: "Blusa Alexia",  // Nome sem tamanho
    price: 25.00,
    images: [
      "/images/Blusa/blusa_alexia/cores.jpeg",
      
    ],
    category: "Blusas",
    description: "Blusa Alexia Varejo R$35,00",
    sku: "2500",
    inStock: true,
    colors: [
      { color: "Bordo", inStock: true },
      { color: "Branco", inStock: true },
      { color: "Azul Bebe", inStock: true },
      { color: "Mostarda", inStock: true },
      { color: "Marrom", inStock: true },
      { color: "Nude", inStock: true },
       
    ],
    sizes: [
      { size: "U", inStock: true },
   
    ]
  },
  
];
