import { Product } from "@/interfaces/Product";

// Exemplo de como estruturar produtos com múltiplos tamanhos
export const conjunto_maisa: Product[] = [
  {
    id: 9,
    name: "Conjunto Maisa",  // Nome sem tamanho
    price: 120.00,
    images: [
      "/images/conjuntos/conjunto_maisa/tiffany.jpeg",
      "/images/conjuntos/conjunto_maisa/cores.jpeg",
    ],
    category: "Conjuntos",
    description: "Conjunto Maisa Varejo R$150,00",
    sku: "6236",
    inStock: true,
    colors: [
      { color: "Tiffany", inStock: true },
      { color: "Amarelo", inStock: true },
      { color: "Branco", inStock: true },
      { color: "Verde", inStock: true },
      { color: "Laranja", inStock: true },
      { color: "Preto", inStock: true }
    ],
    sizes: [
      { size: "P", inStock: true },
      { size: "M", inStock: true },
      { size: "G", inStock: true }
    ]
  },

  
];
