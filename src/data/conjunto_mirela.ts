import { Product } from "@/interfaces/Product";

// Exemplo de como estruturar produtos com múltiplos tamanhos
export const conjunto_mirela: Product[] = [
  {
    id: 6,
    name: "Conjunto Mirela",  // Nome sem tamanho
    price: 170.00,
    images: [
      "/images/conjuntos/conjunto_mirela/areia.jpeg",
      "/images/conjuntos/conjunto_mirela/azulbebe.jpeg",
      "/images/conjuntos/conjunto_mirela/branco.jpeg",
      "/images/conjuntos/conjunto_mirela/verde.jpeg",
      "/images/conjuntos/conjunto_mirela/marinho.jpeg",
      "/images/conjuntos/conjunto_mirela/cores.jpeg",
    ],
    category: "Conjuntos",
    description: "Conjunto Mirela Varejo R$190,00",
    sku: "2217",
    inStock: true,
    colors: [
      { color: "Bege", inStock: true },
      { color: "Azul Bebe", inStock: true },
      { color: "Branco", inStock: true },
      { color: "Marinho", inStock: true },
      { color: "Verde", inStock: true },

    ],
    sizes: [
      { size: "P", inStock: true },
      { size: "M", inStock: true },
      { size: "G", inStock: true }
    ]
  },

];
