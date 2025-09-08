import { Product } from "@/interfaces/Product";

// Exemplo de como estruturar produtos com múltiplos tamanhos
export const conjunto_duda: Product[] = [
  {
    id: 33,
    name: "Conjunto Duda ",  // Nome sem tamanho
    price: 160.00,
    images: [
      "/images/conjuntos/conjunto_duda/azul.jpeg",
      "/images/conjuntos/conjunto_duda/cores.jpeg",
    ],
    category: "Conjuntos",
    description: "Conjunto Duda Varejo R$170,00",
    sku: "33",
    inStock: true,
    colors: [
      { color: "Azul Bebe", inStock: true },
      { color: "Off White", inStock: true },
       { color: "Preto", inStock: true },
        { color: "Azul", inStock: true },
         { color: "Rosa Bebe", inStock: true },
          { color: "Nude", inStock: true },
    ],
    sizes: [
      { size: "P", inStock: true },
      { size: "M", inStock: true },
      { size: "G", inStock: true }
    ]
  },
  
];
