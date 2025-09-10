import { Product } from "@/interfaces/Product";

// Exemplo de como estruturar produtos com múltiplos tamanhos
export const regata_isadora: Product[] = [
  {
    id: 753,
    name: "Regata Isadora",  // Nome sem tamanho
    price: 25.00,
    images: [
      "/images/regatas/regata_isadora/branco.jpeg",
      "/images/regatas/regata_isadora/cores.jpeg",
    ],
    category: "Regata",
    description: "Regata Isadora Varejo R$35,00",
    sku: "32132",
    inStock: true,
    colors: [
      { color: "Branco", inStock: true },
      { color: "Azul Bebe", inStock: true },
      { color: "Bege", inStock: true },
      { color: "Preto", inStock: true },
      { color: "Vermelho", inStock: true },
      
      
    ],
    sizes: [
      { size: "U", inStock: true },
      
    ]
  },

  
];
