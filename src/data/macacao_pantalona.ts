import { Product } from "@/interfaces/Product";

// Exemplo de como estruturar produtos com múltiplos tamanhos
export const macacao_pantalona: Product[] = [
  {
    id: 1202,
    name: "Macacão Pantalona",  // Nome sem tamanho
    price: 190.00,
    images: [
      "/images/macacao/macacão pantalona de alfaiataria/branco.webp",
      "/images/macacao/macacão pantalona de alfaiataria/cores.webp",
    ],
    category: "Macacão",
    description: "Macacão Pantalona Varejo R$220,00",
    sku: "241019",
    inStock: true,
    colors: [
      { color: "Vermelho", inStock: true },
      { color: "Branco", inStock: true },
      { color: "Amarelo", inStock: true },
      { color: "Azul Bebe", inStock: true },
      { color: "Preto", inStock: true },
     
    ],
    sizes: [
      { size: "P", inStock: true },
      { size: "M", inStock: true },
      { size: "G", inStock: true }
    ]
  },
  
];
