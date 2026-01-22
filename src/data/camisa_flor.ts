import { Product } from "@/interfaces/Product";

// Exemplo de como estruturar produtos com múltiplos tamanhos
export const camisa_flor: Product[] = [
  {
    id: 3010,
    name: "Camisa Flor",  // Nome sem tamanho
    price: 95.00,
    images: [
      "/images/Camisas/camisa_flor/camisa_flor.jpeg",
     
    ],
    category: "Camisas",
    description: "Camisa Flor Varejo R$110,00",
    sku: "3010",
    inStock: true,
    colors: [
      { color: "Branco", inStock: true },
      
       
    ],
    sizes: [
      { size: "P", inStock: true },
      { size: "M", inStock: true },
      { size: "G", inStock: true }
    ]
  },
  
];
