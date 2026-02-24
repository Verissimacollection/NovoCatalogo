import { Product } from "@/interfaces/Product";

// Exemplo de como estruturar produtos com múltiplos tamanhos
export const camisa_flor_de_liz: Product[] = [
  {
    id: 5506,
    name: "Camisa Flor de Liz",  // Nome sem tamanho
    price: 220.00,
    images: [
      "/images/camisa_flor_de_liz/camisa_flor_de_liz.jpeg",
      
    ],
    category: "Camisas",
    description: "Camisa Varejo R$240,00",
    sku: "300",
    inStock: true,
    colors: [
      { color: "Azul", inStock: true },
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
