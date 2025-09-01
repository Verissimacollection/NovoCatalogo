import { Product } from "@/interfaces/Product";

// Exemplo de como estruturar produtos com múltiplos tamanhos
export const regata_cetim: Product[] = [
  {
    id: 700,
    name: "Regata Cetim com alça em couro",  // Nome sem tamanho
    price: 60.00,
    images: [
      "/images/regatas/regata_importada_cetim_couro/offwhite.jpeg",
      "/images/regatas/regata_importada_cetim_couro/cores.jpeg",
    ],
    category: "Regata",
    description: "Regata Cetim com alça em couro Importada",
    sku: "6025",
    inStock: true,
    colors: [
      { color: "Branco", inStock: true },
      { color: "Off White", inStock: true },
      { color: "Cinza", inStock: true },
      { color: "Preto", inStock: true },
      { color: "Vermelho", inStock: true },
      
    ],
    sizes: [
      { size: "P", inStock: true },
      { size: "M", inStock: true },
      { size: "G", inStock: true }
    ]
  },

  
];
