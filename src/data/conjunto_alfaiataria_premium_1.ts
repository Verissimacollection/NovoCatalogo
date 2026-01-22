import { Product } from "@/interfaces/Product";

// Exemplo de como estruturar produtos com múltiplos tamanhos
export const conjunto_alfaiataria_premium_1: Product[] = [
  {
    id: 6600,
    name: "Vestido Amanda",  // Nome sem tamanho
    price: 190.00,
    images: [
      "/images/alfaiataria_premium/conjunto_premium_1/preto.jpeg",
      "/images/alfaiataria_premium/conjunto_premium_1/cores.jpeg",
      
    ],
    category: "Conjunto",
    description: "Conjunto Alfaiataria Premium Varejo R&230,00 ",
    sku: "6600",
    inStock: true,
    colors: [
      { color: "Preto", inStock: true },
      { color: "Off White", inStock: true },
      { color: "Marrom", inStock: true },
       { color: "Chocolate", inStock: true },
      { color: "Roxo", inStock: true },
     

    ],
    sizes: [
      { size: "P", inStock: true },
      { size: "M", inStock: true },
      { size: "G", inStock: true }
    ]
  },


];
