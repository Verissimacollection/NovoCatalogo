import { Product } from "@/interfaces/Product";

// Exemplo de como estruturar produtos com múltiplos tamanhos
export const macaquinho: Product[] = [
  {
    id: 4512,
    name: "Macaquinho",  // Nome sem tamanho
    price: 38.00,
    images: [
      "/images/macaquinho/macaquinho_cores.jpeg",
      
    ],
    category: "macaquinho",
    description: "Macaquinho Valor no Varejo R$48,90",
    sku: "4512",
    inStock: true,
    colors: [
      { color: "Preto", inStock: true },
      { color: "Branco", inStock: true },
      { color: "Chocolate", inStock: true },
      
       
    ],
    sizes: [
      { size: "U", inStock: true },
      
   
    ]
  },
  
];
