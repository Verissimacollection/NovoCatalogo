import { Product } from "@/interfaces/Product";

// Exemplo de como estruturar produtos com múltiplos tamanhos
export const conjunto_mia_saia: Product[] = [
  {
    id: 30,
    name: "Conjunto Mia Saia ",  // Nome sem tamanho
    price: 130.00,
    images: [
      "/images/conjuntos/conjunto_mia_saia/cinza.jpeg",
      "/images/conjuntos/conjunto_mia_saia/cores.jpeg",
    ],
    category: "Conjuntos",
    description: "Conjunto Mia Saia Verejo R$150,00",
    sku: "30",
    inStock: true,
    colors: [
      { color: "Off White", inStock: true },
      { color: "Cinza", inStock: true },
      { color: "Marrom", inStock: true },
      { color: "Marinho", inStock: true },
      { color: "Bege Escuro", inStock: true },
    ],
    sizes: [
      { size: "U", inStock: true },
      
    ]
  },
  
];
