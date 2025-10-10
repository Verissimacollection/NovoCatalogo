import { Product } from "@/interfaces/Product";

// Exemplo de como estruturar produtos com múltiplos tamanhos
export const conjunto_flores: Product[] = [
  {
    id: 5,
    name: "Conjunto Flores",  // Nome sem tamanho
    price: 220.00,
    images: [
      "/images/conjuntos/conjunto_flores/nude.jpeg",
      "/images/conjuntos/conjunto_flores/cores.jpeg",
     
    ],
    category: "Conjuntos",
    description: "Conjunto Flores Varejo R&250,00 ",
    sku: "8331",
    inStock: true,
    colors: [
      { color: "Branco c/ Nude", inStock: true },
      { color: "Azul Bebe", inStock: true },
      { color: "Rosa Bebe", inStock: true },
      { color: "Amarelo", inStock: true },
      { color: "Branco C/ Marinho", inStock: true },

    ],
    sizes: [
      { size: "P", inStock: true },
      { size: "M", inStock: true },
      { size: "G", inStock: true }
    ]
  },


];
