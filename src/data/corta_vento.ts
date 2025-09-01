import { Product } from "@/interfaces/Product";

// Exemplo de como estruturar produtos com múltiplos tamanhos
export const corta_vento: Product[] = [
  {
    id: 200,
    name: "Corta Vento",  // Nome sem tamanho
    price: 60.00,
    images: [
      "/images/corta_vento/cores.jpeg",
      
    ],
    category: "Corta Vento",
    description: "Corta Vento disponível em múltiplos tamanhos",
    sku: "SD156",
    inStock: true,
    colors: [
      { color: "Preto", inStock: true },
      { color: "Branco", inStock: true },
      { color: "Marrom", inStock: true },
      { color: "Beje", inStock: true },
      
    ],
    sizes: [
      { size: "P", inStock: true },
      { size: "M", inStock: true },
      { size: "G", inStock: true }
    ]
  },

  
];
