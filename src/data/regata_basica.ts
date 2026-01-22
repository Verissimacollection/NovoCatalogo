import { Product } from "@/interfaces/Product";

// Exemplo de como estruturar produtos com múltiplos tamanhos
export const regata_basica: Product[] = [
  {
    id: 865,
    name: "Regata Basica",  // Nome sem tamanho
    price: 39.90,
    images: [
      "/images/regatas/regata_basica/regata_cores.jpeg",
    ],
    category: "Regata",
    description: "Regata Basica atacado 3 Por R$99,90",
    sku: "865",
    inStock: true,
    colors: [
      { color: "Nude", inStock: true },
       
      
    ],
    sizes: [
      { size: "U", inStock: true },
      
    ]
  },

  
];
