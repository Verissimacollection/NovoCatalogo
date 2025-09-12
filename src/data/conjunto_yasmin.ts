import { Product } from "@/interfaces/Product";

// Exemplo de como estruturar produtos com múltiplos tamanhos
export const conjunto_yasmin: Product[] = [
  {
    id: 51,
    name: "Conjunto Yasmin ",  // Nome sem tamanho
    price: 130.00,
    images: [
      "/images/conjuntos/conjunto_heloisa/cores.jpeg",
     
    ],
    category: "Conjuntos",
    description: "Conjunto Yasmin Varejo R$150,00",
    sku: "51",
    inStock: true,
    colors: [
      { color: "Terra", inStock: true },
      { color: "Preto", inStock: true },
      { color: "Azul ", inStock: true },
      { color: "Bege", inStock: true },
    ],
    sizes: [
      { size: "P", inStock: true },
      { size: "M", inStock: true },
      { size: "G", inStock: true }
    ]
  },
  
];
