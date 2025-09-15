import { Product } from "@/interfaces/Product";

// Exemplo de como estruturar produtos com múltiplos tamanhos
export const conjunto_bea: Product[] = [
  {
    id: 3,
    name: "Conjunto Bea ",  // Nome sem tamanho
    price: 150.00,
    images: [
      "/images/conjuntos/conjunto_bea/branco.jpeg",
      "/images/conjuntos/conjunto_bea/cores.jpeg",
    ],
    category: "Conjuntos",
    description: "Conjunto Bea Varejo R$170,00",
    sku: "6546",
    inStock: true,
    colors: [
      { color: "Branco", inStock: true },
      { color: "Preto", inStock: true },
    ],
    sizes: [
      { size: "P", inStock: true },
      { size: "M", inStock: true },
      { size: "G", inStock: true }
    ]
  },
  
];
