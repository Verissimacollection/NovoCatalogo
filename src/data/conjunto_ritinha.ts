import { Product } from "@/interfaces/Product";

// Exemplo de como estruturar produtos com múltiplos tamanhos
export const conjunto_ritinha: Product[] = [
  {
    id: 53,
    name: "Conjunto Ritinha ",  // Nome sem tamanho
    price: 70.00,
    images: [
      "/images/conjuntos/conjunto_ritinha/verde.jpeg",
    ],
    category: "Conjuntos",
    description: "Conjunto Ritinha Varejo R$80,00",
    sku: "53",
    inStock: true,
    colors: [
      { color: "Lilas", inStock: true },
      { color: "Rosa", inStock: true },
       { color: "Verde", inStock: true },
        { color: "Off White", inStock: true },
         
    ],
    sizes: [
      { size: "U", inStock: true },
      
    ]
  },
  
];
 