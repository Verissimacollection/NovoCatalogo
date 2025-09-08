import { Product } from "@/interfaces/Product";

// Exemplo de como estruturar produtos com múltiplos tamanhos
export const blusa_modal_clara: Product[] = [
  {
    id: 2501,
    name: "Blusa Modal Clara",  // Nome sem tamanho
    price: 35.00,
    images: [
      "/images/Blusa/modal_clara/cores.jpeg",
      
    ],
    category: "Blusas",
    description: "Blusa Modal Clara Varejo R$40,00",
    sku: "2501",
    inStock: true,
    colors: [
      { color: "Bordo", inStock: true },
      { color: "Branco", inStock: true },
      { color: "Marinho", inStock: true },
      { color: "Preto", inStock: true },
      { color: "Marrom", inStock: true },
      { color: "Cinza", inStock: true },
       
    ],
    sizes: [
      { size: "U", inStock: true },
   
    ]
  },
  
];
