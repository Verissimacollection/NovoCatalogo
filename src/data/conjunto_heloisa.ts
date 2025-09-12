import { Product } from "@/interfaces/Product";

// Exemplo de como estruturar produtos com múltiplos tamanhos
export const conjunto_heloisa: Product[] = [
  {
    id: 50,
    name: "Conjunto Heloisa ",  // Nome sem tamanho
    price: 180.00,
    images: [
      "/images/conjuntos/conjunto_heloisa/branco.jpeg",
      "/images/conjuntos/conjunto_heloisa/branco1.jpeg",
      "/images/conjuntos/conjunto_heloisa/azul.jpeg",
      "/images/conjuntos/conjunto_heloisa/preto.jpeg",
      "/images/conjuntos/conjunto_heloisa/rosa.jpeg",
      "/images/conjuntos/conjunto_heloisa/cores.jpeg",
    ],
    category: "Conjuntos",
    description: "Conjunto Heloisa Varejo R$190,00",
    sku: "50",
    inStock: true,
    colors: [
      { color: "Branco", inStock: true },
      { color: "Preto", inStock: true },
      { color: "Rosa Bebe", inStock: true },
      { color: "Azul Bebe", inStock: true },
      { color: "Verde", inStock: true },
    ],
    sizes: [
      { size: "P", inStock: true },
      { size: "M", inStock: true },
      { size: "G", inStock: true }
    ]
  },
  
];
