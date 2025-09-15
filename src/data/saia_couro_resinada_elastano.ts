import { Product } from "@/interfaces/Product";

// Exemplo de como estruturar produtos com múltiplos tamanhos
export const saia_couro_resinada: Product[] = [
  {
    id: 400,
    name: "Saia Couro Resinada",  // Nome sem tamanho
    price: 70.00,
    images: [
      "/images/saias/saia_couro_resinada_elastano/cores.jpeg",
      
    ],
    category: "Saia",
    description: "Saias Couro Resinada Com Elastano Importada R$80,00 Varejo ",
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
