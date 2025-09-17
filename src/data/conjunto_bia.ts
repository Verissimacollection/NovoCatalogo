import { Product } from "@/interfaces/Product";

// Exemplo de como estruturar produtos com múltiplos tamanhos
export const conjunto_bia: Product[] = [
  {
    id: 48,
    name: "Conjunto Bia",  // Nome sem tamanho
    price: 170.00,
    images: [
      "/images/conjuntos/conjunto_bia/conjuntobiarosa.jpeg",
      "/images/conjuntos/conjunto_bia/biacores.jpeg",
    ],
    category: "Conjuntos",
    description: "Conjunto Bia Varejo R$190,00",
    sku: "6532",
    inStock: true,
    colors: [
      { color: "Verde", inStock: true },
      { color: "Azul Bebe", inStock: true },
      { color: "Amarelo", inStock: true },
      { color: "Preto", inStock: true },
      { color: "Rosa Bebe", inStock: true }
    ],
    sizes: [
      { size: "P", inStock: true },
      { size: "M", inStock: true },
      { size: "G", inStock: true }
    ]
  },

  
];
