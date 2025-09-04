import { Product } from "@/interfaces/Product";

// Exemplo de como estruturar produtos com múltiplos tamanhos
export const conjunto_maya: Product[] = [
  {
    id: 26,
    name: "Conjunto Maya ",  // Nome sem tamanho
    price: 150.00,
    images: [
      "/images/conjuntos/conjunto_maya/verde.jpeg",
      "/images/conjuntos/conjunto_maya/cores.jpeg",
    ],
    category: "Conjuntos",
    description: "Conjunto Maya Varejo R$170,00",
    sku: "1468",
    inStock: true,
    colors: [
      { color: "Branco", inStock: true },
      { color: "Coral", inStock: true },
       { color: "Verde", inStock: true },
        { color: "Cinza", inStock: true },
         { color: "Amarelo", inStock: true },
    ],
    sizes: [
      { size: "P", inStock: true },
      { size: "M", inStock: true },
      { size: "G", inStock: true }
    ]
  },
  
];
