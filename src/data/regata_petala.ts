import { Product } from "@/interfaces/Product";

// Exemplo de como estruturar produtos com múltiplos tamanhos
export const regata_petala: Product[] = [
  {
    id: 700,
    name: "Regata Petala",  // Nome sem tamanho
    price: 40.00,
    images: [
      "/images/regatas/regata_petala/cores.jpeg",
    ],
    category: "Regata",
    description: "Regata Petala Varejo R$50,00",
    sku: "6025",
    inStock: true,
    colors: [
      { color: "Branco", inStock: true },
      { color: "Azul Bebe", inStock: true },
      { color: "Verde", inStock: true },
      { color: "Preto", inStock: true },
      
      
    ],
    sizes: [
      { size: "P", inStock: true },
      { size: "M", inStock: true },
      { size: "G", inStock: true }
    ]
  },

  
];
