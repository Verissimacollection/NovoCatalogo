import { Product } from "@/interfaces/Product";

// Exemplo de como estruturar produtos com múltiplos tamanhos
export const camisa_eli: Product[] = [
  {
    id: 3000,
    name: "Camisa Eli",  // Nome sem tamanho
    price: 50.00,
    images: [
      "/images/Camisas/camisa_eli/marrom.jpeg",
      "/images/Camisas/camisa_eli/nude.jpeg",
      "/images/Camisas/camisa_eli/preto.jpeg",
    ],
    category: "Camisas",
    description: "Camisa Eli Varejo R$70,00",
    sku: "300",
    inStock: true,
    colors: [
      { color: "Vermelho", inStock: true },
      { color: "Dourado", inStock: true },
      { color: "Preto", inStock: true },
       
    ],
    sizes: [
      { size: "P", inStock: true },
      { size: "M", inStock: true },
      { size: "G", inStock: true }
    ]
  },
  
];
