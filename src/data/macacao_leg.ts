import { Product } from "@/interfaces/Product";

// Produto novo seguindo o padrão dos demais
export const macacao_leg: Product[] = [
  {
    id: 10002,
    name: "Macacão Leg", // Nome sem tamanho
    price: 180.0,
    images: [
      // fotos de cada cor fornecidas pelo usuário
      "/images/macacao/macacao_leg/verde.jpeg",
      "/images/macacao/macacao_leg/marrom.jpeg",
      "/images/macacao/macacao_leg/preto.jpeg",
      "/images/macacao/macacao_leg/marinho.jpeg",
      "/images/macacao/macacao_leg/cinza.jpeg",
      "/images/macacao/macacao_leg/nude.jpeg",
    ],
    category: "Macacão",
    description: "Macacão Leg Varejo R$180,00",
    sku: "",
    inStock: true,
    colors: [
      { color: "Marrom", inStock: true },
      { color: "Cinza", inStock: true },
      { color: "Marinho", inStock: true },
      { color: "Preto", inStock: true },
      { color: "Verde", inStock: true },
      { color: "Nude", inStock: true },
    ],
    sizes: [
      { size: "P", inStock: true },
      { size: "M", inStock: true },
      { size: "G", inStock: true },
      { size: "GG", inStock: true },
    ],
  },
];
