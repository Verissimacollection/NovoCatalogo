import { Product } from "@/interfaces/Product";

// Exemplo de como estruturar produtos com múltiplos tamanhos
export const conjunto_daslu: Product[] = [
  {
    id: 5504,
    name: "Conjunto Daslu",  // Nome sem tamanho
    price: 195.00,
    images: [
      "/images/Conjunto_daslu/cores.jpeg",
       "/images/Conjunto_daslu/daslu1.jpeg",
       "/images/Conjunto_daslu/daslu2.jpeg",
       "/images/Conjunto_daslu/daslu3.jpeg",
      
    ],
    category: "Conjuntos",
    description: "Conunto de Linho Varejo R$235,00",
    sku: "300",
    inStock: true,
    colors: [
      { color: "Beje", inStock: true },
      { color: "Off White", inStock: true },
      { color: "Marrom", inStock: true },
      { color: "Bordo", inStock: true },
      { color: "Preto", inStock: true },
       
    ],
    sizes: [
      { size: "P", inStock: true },
      { size: "M", inStock: true },
      { size: "G", inStock: true }
    ]
  },
  
];
