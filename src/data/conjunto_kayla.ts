import { Product } from "@/interfaces/Product";

// Exemplo de como estruturar produtos com múltiplos tamanhos
export const conjunto_kayla: Product[] = [
  {
    id: 21,
    name: "Conjunto Kayla",  // Nome sem tamanho
    price: 110.00,
    images: [
      "/images/conjuntos/conjunto_kayla/rosabebe.jpeg",
      "/images/conjuntos/conjunto_kayla/cores.jpeg",
    ],
    category: "Conjuntos",
    description: "Conjunto Kayla Varejo R&140,00 ",
    sku: "8331",
    inStock: true,
    colors: [
      { color: "Branco", inStock: true },
      { color: "Azul Bebe", inStock: true },
      { color: "Rosa Bebe", inStock: true },
      { color: "Marrom", inStock: true },
      { color: "Verde", inStock: true },
      
    ],
    sizes: [
      { size: "P", inStock: true },
      { size: "M", inStock: true },
      { size: "G", inStock: true }
    ]
  },

  
];
