import { Product } from "@/interfaces/Product";

// Exemplo de como estruturar produtos com múltiplos tamanhos
export const blusa_estruturada: Product[] = [
  {
    id: 9860,
    name: "Blusa Estruturada",  // Nome sem tamanho
    price: 75.00,
    images: [
      "/images/Blusa/blusa_estruturada/Blusa_estruturada.jpeg",
      
    ],
    category: "Blusas",
    description: "Blusa Estruturada Valor no Varejo R$89,90",
    sku: "2500",
    inStock: true,
    colors: [
      { color: "Amarelo", inStock: true },
      { color: "Branco", inStock: true },
      { color: "Rosa", inStock: true },
      
       
    ],
    sizes: [
      { size: "P", inStock: true },
      { size: "M", inStock: true },
      { size: "G", inStock: true },
   
    ]
  },
  
];
