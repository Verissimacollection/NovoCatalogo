import { Product } from "@/interfaces/Product";

// Exemplo de como estruturar produtos com múltiplos tamanhos
export const conjunto_camila: Product[] = [
  {
    id: 49,
    name: "Conjunto Camila ",  // Nome sem tamanho
    price: 170.00,
    images: [
      "/images/conjuntos/conjunto_camila/cores.jpeg",
    ],
    category: "Conjuntos",
    description: "Conjunto Camila Varejo R$190,00",
    sku: "46",
    inStock: true,
    colors: [
      { color: "Branco", inStock: true },
       { color: "Verde", inStock: true },
        { color: "Azul Bebe", inStock: true },
         { color: "Preto", inStock: true },
    ],
    sizes: [
      { size: "P", inStock: true },
      { size: "M", inStock: true },
      { size: "G", inStock: true }
    ]
  },
  
];
