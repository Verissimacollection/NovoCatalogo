import { Product } from "@/interfaces/Product";

// Exemplo de como estruturar produtos com múltiplos tamanhos
export const regata_eloisa: Product[] = [
  {
    id: 751,
    name: "Regata Eloisa",  // Nome sem tamanho
    price: 25.00,
    images: [
      "/images/regatas/regata_eloisa/cores.jpeg",
    ],
    category: "Regata",
    description: "Regata Eloisa Varejo R$35,00",
    sku: "750",
    inStock: true,
    colors: [
      { color: "Off White", inStock: true },
      { color: "Azul Bebe", inStock: true },
      { color: "Coral", inStock: true },
      { color: "Lilas", inStock: true },
      { color: "Preto", inStock: true },
      { color: "Listrada", inStock: true },
      
      
    ],
    sizes: [
      { size: "P", inStock: true },
      { size: "M", inStock: true },
      { size: "G", inStock: true }
    ]
  },

  
];
