import { Product } from "@/interfaces/Product";

// Exemplo de como estruturar produtos com múltiplos tamanhos
export const blusa_mayara: Product[] = [
  {
    id: 2502,
    name: "Blusa Mayara",  // Nome sem tamanho
    price: 60.00,
    images: [
      "/images/Blusa/blusa_mayara/preto.jpeg",
      
    ],
    category: "Blusas",
    description: "Blusa Mayara Varejo R$70,00",
    sku: "2502",
    inStock: true,
    colors: [
      { color: "Preto", inStock: true },
      { color: "Off White", inStock: true },
      { color: "Marrom", inStock: true },
     
       
    ],
    sizes: [
      { size: "P", inStock: true },
      { size: "M", inStock: true },
      { size: "G", inStock: true },
   
    ]
  },
  
];
