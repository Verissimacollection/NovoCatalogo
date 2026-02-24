import { Product } from "@/interfaces/Product";

// Exemplo de como estruturar produtos com múltiplos tamanhos
export const cadivel: Product[] = [
  {
    id: 5500,
    name: "Cadivel",  // Nome sem tamanho
    price: 50.00,
    images: [
      "/images/cadivel/cadivelcores.jpeg",
      
    ],
    category: "Camisas",
    description: "Camisa Eli Varejo R$70,00",
    sku: "300",
    inStock: true,
    colors: [
      { color: "Branco", inStock: true },
      { color: "Amarelo", inStock: true },
      { color: "Rosa", inStock: true },
      { color: "Azul Bebe", inStock: true },
      { color: "Vermelho", inStock: true },
       
    ],
    sizes: [
      { size: "P", inStock: true },
      { size: "M", inStock: true },
      { size: "G", inStock: true }
    ]
  },
  
];
