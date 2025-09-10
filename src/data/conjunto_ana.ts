import { Product } from "@/interfaces/Product";

// Exemplo de como estruturar produtos com múltiplos tamanhos
export const conjunto_ana: Product[] = [
  {
    id: 5,
    name: "Conjunto Ana",  // Nome sem tamanho
    price: 130.00,
    images: [
      "/images/conjuntos/conjunto_ana/offwhite.jpeg",
      "/images/conjuntos/conjunto_ana/marrom.jpeg",
      "/images/conjuntos/conjunto_ana/cores.jpeg",
    ],
    category: "Conjuntos",
    description: "Conjunto Ana Varejo R&150,00 ",
    sku: "8331",
    inStock: true,
    colors: [
      { color: "Off White", inStock: true },
      { color: "Azul Bebe", inStock: true },
      { color: "marrom", inStock: true },
      { color: "Preto", inStock: true },
      { color: "Verde", inStock: true },

    ],
    sizes: [
      { size: "P", inStock: true },
      { size: "M", inStock: true },
      { size: "G", inStock: true }
    ]
  },


];
