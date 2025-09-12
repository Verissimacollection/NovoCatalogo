import { Product } from "@/interfaces/Product";

// Exemplo de como estruturar produtos com múltiplos tamanhos
export const regata_aurora: Product[] = [
  {
    id: 755,
    name: "Regata Aurora",  // Nome sem tamanho
    price: 40.00,
    images: [
      "/images/regatas/regata_eloisa/cores.jpeg",
    ],
    category: "Regata",
    description: "Regata Aurora Varejo R$50,00",
    sku: "755",
    inStock: true,
    colors: [
      { color: "Nude", inStock: true },
       
      
    ],
    sizes: [
      { size: "U", inStock: true },
      
    ]
  },

  
];
