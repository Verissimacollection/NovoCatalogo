import { Product } from "@/interfaces/Product";

// Exemplo de como estruturar produtos com múltiplos tamanhos
export const camisa_rafaela: Product[] = [
  {
    id: 3002,
    name: "Camisa Rafaela",  // Nome sem tamanho
    price: 75.00,
    images: [
      "/images/Camisas/camisa_rafaela/cores.jpeg",
    
    ],
    category: "Camisas",
    description: "Camisa Rafaela Varejo R$85,00",
    sku: "3002",
    inStock: true,
    colors: [
      { color: "Branco", inStock: true },
      { color: "Verde", inStock: true },
      { color: "Azul Bebe", inStock: true },
      { color: "Vermelho", inStock: true },
      { color: "Cinza", inStock: true },
       
    ],
    sizes: [
      { size: "P", inStock: true },
      { size: "M", inStock: true },
      { size: "G", inStock: true }
    ]
  },
  
];
