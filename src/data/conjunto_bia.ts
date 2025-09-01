import { Product } from "@/interfaces/Product";

// Exemplo de como estruturar produtos com múltiplos tamanhos
export const conjunto_bia: Product[] = [
  {
    id: 1,
    name: "Conjunto Bia",  // Nome sem tamanho
    price: 60.00,
    images: [
      "/images/conjuntos/conjunto_bia/conjuntobiarosa.jpeg",
      "/images/conjuntos/conjunto_bia/biacores.jpeg",
    ],
    category: "Conjuntos",
    description: "Conjunto Bia disponível em múltiplos tamanhos",
    sku: "6532",
    inStock: true,
    color: "Rosa Bebê",
    sizes: [
      { size: "P", inStock: true },
      { size: "M", inStock: true },
      { size: "G", inStock: true }
    ]
  },
  {
    id: 2,
    name: "Conjunto Bia",  // Nome sem tamanho
    price: 60.00,
    images: [
      "/images/conjuntos/conjunto_bia/biacores.jpeg",
    ],
    category: "Conjuntos",
    description: "Conjunto Bia disponível em múltiplos tamanhos",
    sku: "6532",
    inStock: true,
    color: "Verde",
    sizes: [
      { size: "P", inStock: true },
      { size: "M", inStock: true },
      { size: "G", inStock: true }
    ]
  },{
    id: 3,
    name: "Conjunto Bia",  // Nome sem tamanho
    price: 60.00,
    images: [
      "/images/conjuntos/conjunto_bia/biacores.jpeg",
    ],
    category: "Conjuntos",
    description: "Conjunto Bia disponível em múltiplos tamanhos",
    sku: "6532",
    inStock: true,
    color: "Azul Bebê",
    sizes: [
      { size: "P", inStock: true },
      { size: "M", inStock: true },
      { size: "G", inStock: true }
    ]
  },{
    id: 4,
    name: "Conjunto Bia",  // Nome sem tamanho
    price: 60.00,
    images: [
      "/images/conjuntos/conjunto_bia/biacores.jpeg",
    ],
    category: "Conjuntos",
    description: "Conjunto Bia disponível em múltiplos tamanhos",
    sku: "6532",
    inStock: true,
    color: "Amarelo",
    sizes: [
      { size: "P", inStock: true },
      { size: "M", inStock: true },
      { size: "G", inStock: true }
    ]
  },
  {
    id: 5,
    name: "Conjunto Bia",  // Nome sem tamanho
    price: 60.00,
    images: [
      "/images/conjuntos/conjunto_bia/biacores.jpeg",
    ],
    category: "Conjuntos",
    description: "Conjunto Bia disponível em múltiplos tamanhos",
    sku: "6532",
    inStock: true,
    color: "Preto",
    sizes: [
      { size: "P", inStock: true },
      { size: "M", inStock: true },
      { size: "G", inStock: true }
    ]
  },
];
