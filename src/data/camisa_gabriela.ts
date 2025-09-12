import { Product } from "@/interfaces/Product";

// Exemplo de como estruturar produtos com múltiplos tamanhos
export const camisa_gabriela: Product[] = [
  {
    id: 3001,
    name: "Camisa Gabriela",  // Nome sem tamanho
    price: 75.00,
    images: [
      "/images/Camisas/camisa_gabriela/branco.jpeg",
      "/images/Camisas/camisa_gabriela/azul.jpeg",
      "/images/Camisas/camisa_gabriela/cores.jpeg",
    ],
    category: "Camisas",
    description: "Camisa Gabriela Varejo R$85,00",
    sku: "3001",
    inStock: true,
    colors: [
      { color: "Branco", inStock: true },
      { color: "Rosa Bebe", inStock: true },
      { color: "Azul Bebe", inStock: true },
      { color: "Off White", inStock: true },
      { color: "Preto", inStock: true },
       
    ],
    sizes: [
      { size: "P", inStock: true },
      { size: "M", inStock: true },
      { size: "G", inStock: true }
    ]
  },
  
];
