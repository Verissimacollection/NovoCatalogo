import { Product } from "@/interfaces/Product";

// Exemplo de como estruturar produtos com múltiplos tamanhos
export const conjunto_linho: Product[] = [
  {
    id: 5656,
    name: "Conjunto Linho",  // Nome sem tamanho
    price: 90.00,
    images: [
      "/images/conjuntos/conjunto_linho/conjunto_curto.jpeg",
    ],
    category: "Conjuntos",
    description: "Conjunto Ana Varejo R&110,00 ",
    sku: "5656",
    inStock: true,
    colors: [
      { color: "Off White", inStock: true },
      { color: "Rosa Bebe", inStock: true },
      

    ],
    sizes: [
      { size: "P", inStock: true },
      { size: "M", inStock: true },
      { size: "G", inStock: true }
    ]
  },


];
