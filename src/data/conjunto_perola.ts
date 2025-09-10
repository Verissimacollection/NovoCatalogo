import { Product } from "@/interfaces/Product";

// Exemplo de como estruturar produtos com múltiplos tamanhos
export const conjunto_perola: Product[] = [
  {
    id: 50,
    name: "Conjunto Perola ",  // Nome sem tamanho
    price: 170.00,
    images: [
      "/images/conjuntos/conjunto_perola/cores.jpeg",
    ],
    category: "Conjuntos",
    description: "Conjunto Perola Varejo R$190,00",
    sku: "50",
    inStock: true,
    colors: [
      { color: "Branco", inStock: true },
       { color: "Verde", inStock: true },
        { color: "Azul Bebe", inStock: true },
         { color: "Preto", inStock: true },
    ],
    sizes: [
      { size: "P", inStock: true },
      { size: "M", inStock: true },
      { size: "G", inStock: true }
    ]
  },
  
];
