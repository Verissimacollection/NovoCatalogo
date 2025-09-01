import { Product } from "@/interfaces/Product";

// Exemplo de como estruturar produtos com múltiplos tamanhos
export const conjunto_mirela: Product[] = [
  {
    id: 6,
    name: "Conjunto Mirela",  // Nome sem tamanho
    price: 60.00,
    images: [
      "/images/conjuntos/conjunto_mirela/areia.jpeg",
      "/images/conjuntos/conjunto_mirela/cores.jpeg",
    ],
    category: "Conjuntos",
    description: "Conjunto Mirela disponível em múltiplos tamanhos",
    sku: "2217",
    inStock: true,
    color: "Areia",
    sizes: [
      { size: "P", inStock: true },
      { size: "M", inStock: true },
      { size: "G", inStock: true }
    ]
  },
   {
      id: 7,
      name: "Conjunto Mirela",  // Nome sem tamanho
      price: 60.00,
      images: [
        "/images/conjuntos/conjunto_mirela/branco.jpeg",
        "/images/conjuntos/conjunto_mirela/cores.jpeg",
      ],
      category: "Conjuntos",
      description: "Conjunto Mirela disponível em múltiplos tamanhos",
      sku: "2217",
      inStock: true,
      color: "Branco",
      sizes: [
        { size: "P", inStock: true },
        { size: "M", inStock: true },
        { size: "G", inStock: true }
      ]
    },
 {
    id: 8,
    name: "Conjunto Mirela",  // Nome sem tamanho
    price: 60.00,
    images: [
      "/images/conjuntos/conjunto_mirela/azulbebe.jpeg",
      "/images/conjuntos/conjunto_mirela/cores.jpeg",
    ],
    category: "Conjuntos",
    description: "Conjunto Mirela disponível em múltiplos tamanhos",
    sku: "2217",
    inStock: true,
    color: "Azul Bebê",
    sizes: [
      { size: "P", inStock: true },
      { size: "M", inStock: true },
      { size: "G", inStock: true }
    ]
  }, {
        id: 9,
        name: "Conjunto Mirela",  // Nome sem tamanho
        price: 60.00,
        images: [
          "/images/conjuntos/conjunto_mirela/marinho.jpeg",
          "/images/conjuntos/conjunto_mirela/cores.jpeg",
        ],
        category: "Conjuntos",
        description: "Conjunto Mirela disponível em múltiplos tamanhos",
        sku: "2217",
        inStock: true,
        color: "Marinho",
        sizes: [
          { size: "P", inStock: true },
          { size: "M", inStock: true },
          { size: "G", inStock: true }
        ]
      },
   {
      id: 10,
      name: "Conjunto Mirela",  // Nome sem tamanho
      price: 60.00,
      images: [
        "/images/conjuntos/conjunto_mirela/verde.jpeg",
        "/images/conjuntos/conjunto_mirela/cores.jpeg",
      ],
      category: "Conjuntos",
      description: "Conjunto Mirela disponível em múltiplos tamanhos",
      sku: "2217",
      inStock: true,
      color: "Verde",
      sizes: [
        { size: "P", inStock: true },
        { size: "M", inStock: true },
        { size: "G", inStock: true }
      ]
    },
];
