import { Product } from "@/interfaces/Product";

// Exemplo de como estruturar produtos com múltiplos tamanhos
export const saia_max: Product[] = [
  {
    id: 401,
    name: "Saia Max",  // Nome sem tamanho
    price: 80.00,
    images: [
      "/images/saias/saia_max/branco.jpeg",
    "/images/saias/saia_max/bordo.jpeg",
      
    ],
    category: "Saia",
    description: "Saias Max R$100,00 Varejo  ",
    sku: "7090",
    inStock: true,
    colors: [
      { color: "Bordo", inStock: true },
      { color: "Branco", inStock: true },
      
      
    ],
    sizes: [
      { size: "P", inStock: true },
      { size: "M", inStock: true },
      { size: "G", inStock: true },
     
    ]
  },

  
];
