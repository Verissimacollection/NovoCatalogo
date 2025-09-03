import { Product } from "@/interfaces/Product";

// Exemplo de como estruturar produtos com múltiplos tamanhos
export const regata_estela: Product[] = [
  {
    id: 752,
    name: "Regata Estela",  // Nome sem tamanho
    price: 55.00,
    images: [
      "/images/regatas/regata_estela/branco.jpeg",
      "/images/regatas/regata_estela/nude.jpeg",
      "/images/regatas/regata_estela/cores.jpeg",
    ],
    category: "Regata",
    description: "Regata Estela Varejo R$60,00",
    sku: "2393",
    inStock: true,
    colors: [
      { color: "Branco", inStock: true },
      { color: "Nude", inStock: true },  
    ],
    sizes: [
      { size: "P", inStock: true },
      { size: "M", inStock: true },
      { size: "G", inStock: true },
      { size: "GG", inStock: true }
    ]
  },

  
];
