import { Product } from "@/interfaces/Product";

// Exemplo de como estruturar produtos com múltiplos tamanhos
export const camisa_tifanny: Product[] = [
  {
    id: 5503,
    name: "Camisa Tifanny",  // Nome sem tamanho
    price: 160.00,
    images: [
      "/images/camisa_tifanny/camisa_tifanny.jpeg",
      
    ],
    category: "Camisas",
    description: "Camisa Varejo R$190,00",
    sku: "300",
    inStock: true,
    colors: [
      { color: "Branco", inStock: true },
      { color: "Beje", inStock: true },
      { color: "Rosa", inStock: true },
      { color: "Marrom", inStock: true },
      
       
    ],
    sizes: [
      { size: "P", inStock: true },
      { size: "M", inStock: true },
      { size: "G", inStock: true }
    ]
  },
  
];
