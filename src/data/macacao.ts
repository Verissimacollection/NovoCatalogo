import { Product } from "@/interfaces/Product";

// Exemplo de como estruturar produtos com múltiplos tamanhos
export const macacao: Product[] = [
  {
    id: 1000,
    name: "Macacão Verde",  // Nome sem tamanho
    price: 60.00,
    images: [
      "/images/macacao/verde.jpeg",
      "/images/macacao/cores.jpeg",
    ],
    category: "Macacão",
    description: "Macacão disponível em múltiplos tamanhos",
    sku: "1525",
    inStock: true,
    colors: [
      { color: "Rosa Chiclete", inStock: true },
      { color: "Azul Bebe", inStock: true },
      { color: "Amarelo", inStock: true },
      { color: "Verde", inStock: true },
      { color: "Amarelo Manteiga", inStock: true },
      { color: "Azul Claro", inStock: true },
      { color: "Rosa Bebe", inStock: true }
    ],
    sizes: [
      { size: "P", inStock: true },
      { size: "M", inStock: true },
      { size: "G", inStock: true }
    ]
  },
  {
    id: 1001,
    name: "Macacão Marrom",  // Nome sem tamanho
    price: 60.00,
    images: [
      "/images/macacao/cores.jpeg",
    ],
    category: "Macacão",
    description: "Macacão disponível em múltiplos tamanhos",
    sku: "1525",
    inStock: true,
    colors: [
      { color: "Rosa Chiclete", inStock: true },
      { color: "Azul Bebe", inStock: true },
      { color: "Amarelo", inStock: true },
      { color: "Verde", inStock: true },
      { color: "Amarelo Manteiga", inStock: true },
      { color: "Azul Claro", inStock: true },
      { color: "Rosa Bebe", inStock: true }
    ],
    sizes: [
      { size: "P", inStock: true },
      { size: "M", inStock: true },
      { size: "G", inStock: true }
    ]
  },
  {
    id: 1002,
    name: "Macacão Amarelo",  // Nome sem tamanho
    price: 60.00,
    images: [
      "/images/macacao/cores.jpeg",
    ],
    category: "Macacão",
    description: "Macacão disponível em múltiplos tamanhos",
    sku: "1525",
    inStock: true,
    color: "Amarelo",
    sizes: [
      { size: "P", inStock: true },
      { size: "M", inStock: true },
      { size: "G", inStock: true }
    ]
  },
  {
    id: 1003,
    name: "Macacão Azul Bebe",  // Nome sem tamanho
    price: 60.00,
    images: [
      "/images/macacao/cores.jpeg",
    ],
    category: "Macacão",
    description: "Macacão disponível em múltiplos tamanhos",
    sku: "1525",
    inStock: true,
    color: "Azul Bebe",
    sizes: [
      { size: "P", inStock: true },
      { size: "M", inStock: true },
      { size: "G", inStock: true }
    ]
  },
  {
    id: 1004,
    name: "Macacão Preto",  // Nome sem tamanho
    price: 60.00,
    images: [
      "/images/macacao/cores.jpeg",
    ],
    category: "Macacão",
    description: "Macacão disponível em múltiplos tamanhos",
    sku: "1525",
    inStock: true,
    color: "Preto",
    sizes: [
      { size: "P", inStock: true },
      { size: "M", inStock: true },
      { size: "G", inStock: true }
    ]
  },
];
