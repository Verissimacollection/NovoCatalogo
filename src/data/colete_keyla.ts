import { Product } from "@/interfaces/Product";

// Exemplo de como estruturar produtos com múltiplos tamanhos
export const colete_keyla: Product[] = [
  {
    id: 2000,
    name: "Colete Kayla",  // Nome sem tamanho
    price: 60.00,
    images: [
      "/images/coletes/colete_keyla/preto.jpeg",
      "/images/coletes/colete_keyla/cores.jpeg",
    ],
    category: "Colete",
    description: "Colete Keyla Varejo R$80,00",
    sku: "2000",
    inStock: true,
    colors: [
      { color: "Off White", inStock: true },
      { color: "Bordo", inStock: true },
      { color: "Marrom", inStock: true },
      { color: "Marinho", inStock: true },
      { color: "Preto", inStock: true },
      { color: "Bege", inStock: true },
       
    ],
    sizes: [
      { size: "U", inStock: true },
     
    ]
  },
  
];
