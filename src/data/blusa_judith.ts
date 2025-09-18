import { Product } from "@/interfaces/Product";

// Exemplo de como estruturar produtos com múltiplos tamanhos
export const blusa_judith: Product[] = [
  {
    id: 2505,
    name: "Blusa Judith",  // Nome sem tamanho
    price: 35.00,
    images: [
        "/images/Blusa/blusa_judith/branco.jpeg",
      "/images/Blusa/blusa_judith/cores.jpeg",
      
    ],
    category: "Blusas",
    description: "Blusa Judith",
    sku: "2505",
    inStock: true,
    colors: [
      { color: "Amarelo", inStock: true },
      { color: "Branco", inStock: true },
      { color: "Nude", inStock: true },
      { color: "Preto", inStock: true },
      { color: "Rosa", inStock: true },
      
       
    ],
    sizes: [
      { size: "U", inStock: true },
   
    ]
  },
  
];
