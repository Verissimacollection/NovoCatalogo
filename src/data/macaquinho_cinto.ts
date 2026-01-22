import { Product } from "@/interfaces/Product";

// Exemplo de como estruturar produtos com múltiplos tamanhos
export const macaquinho_cinto: Product[] = [
  {
    id: 6265,
    name: "Macaquinho Com Cinto",  // Nome sem tamanho
    price: 220.00,
    images: [
      "/images/macaquinho/macaquinho_cinto/macaquinho_cinto.jpeg",
      
    ],
    category: "macaquinho",
    description: "Macaquinho com cinto Valor no Varejo R$190,00",
    sku: "6265",
    inStock: true,
    colors: [
      { color: "Preto", inStock: true },
      { color: "Bege", inStock: true },
      { color: "Marrom", inStock: true },
      { color: "Marsala", inStock: true },
      
       
    ],
    sizes: [
      { size: "P", inStock: true },
      { size: "M", inStock: true },
      { size: "G", inStock: true },
      
   
    ]
  },
  
];
