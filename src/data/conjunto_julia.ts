import { Product } from "@/interfaces/Product";

// Exemplo de como estruturar produtos com múltiplos tamanhos
export const conjunto_julia: Product[] = [
  {
    id: 40,
    name: "Conjunto Julia ",  // Nome sem tamanho
    price: 180.00,
    images: [
      "/images/conjuntos/conjunto_julia/branco.jpeg",
     "/images/conjuntos/conjunto_julia/branco1.jpeg",
     "/images/conjuntos/conjunto_julia/cores.jpeg",
    ],
    category: "Conjuntos",
    description: "Conjunto Julia Detalhes em renda alfaiataria premium",
    sku: "40",
    inStock: true,
    colors: [
      { color: "Branco", inStock: true },
      { color: "Preto", inStock: true },
      { color: "Azul Bebe", inStock: true },
      { color: "Rosa Bebe", inStock: true },
      
      
    ],
    sizes: [
      { size: "P", inStock: true },
      { size: "M", inStock: true },
      { size: "G", inStock: true }
    ]
  },
  
];
