import { Product } from "@/interfaces/Product";

// Exemplo de como estruturar produtos com múltiplos tamanhos
export const saia_couro_resinada: Product[] = [
  {
    id: 300,
    name: "Saia Couro Resinada",  // Nome sem tamanho
    price: 65.00,
    images: [
      "/images/saias/saia_couro_resinada_elastano/cores.jpeg",
      
    ],
    category: "Saia",
    description: "Saias Couro Resinada Com Elastano Importada R$80,00 Varejo R$65,00 Atacado ",
    sku: "3535",
    inStock: true,
    colors: [
      { color: "Preto", inStock: true },
      { color: "Terra Cota", inStock: true },
      { color: "Caramelo", inStock: true },
      { color: "Off White", inStock: true },
      
    ],
    sizes: [
      { size: "P", inStock: true },
      { size: "M", inStock: true },
      { size: "G", inStock: true },
      { size: "GG", inStock: true }
    ]
  },

  
];
