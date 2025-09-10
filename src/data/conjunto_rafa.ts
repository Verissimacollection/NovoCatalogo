import { Product } from "@/interfaces/Product";

// Exemplo de como estruturar produtos com múltiplos tamanhos
export const conjunto_rafa: Product[] = [
  {
    id: 28,
    name: "Conjunto Rafa ",  // Nome sem tamanho
    price: 170.00,
    images: [
      "/images/conjuntos/conjunto_rafa/cores.jpeg",
    ],
    category: "Conjuntos",
    description: "Conjunto Rafa Varejo R$190,00",
    sku: "1438",
    inStock: true,
    colors: [
      { color: "Branco", inStock: true },
      { color: "Mostarda", inStock: true },
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
