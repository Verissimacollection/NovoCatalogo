import { Product } from "@/interfaces/Product";

// Exemplo de como estruturar produtos com múltiplos tamanhos
export const camisa_basica_meia_estacao: Product[] = [
  {
    id: 5507,
    name: "Camisa Basica",  // Nome sem tamanho
    price: 110.00,
    images: [
      "/images/camisa_basica_meia_estacao/camisa_basica.jpeg",
      "/images/camisa_basica_meia_estacao/cores.jpeg",
    ],
    category: "Camisas",
    description: "Camisa Varejo R$150,00",
    sku: "300",
    inStock: true,
    colors: [
      { color: "Branco", inStock: true },
      { color: "Beje", inStock: true },
      { color: "Nude", inStock: true },
      { color: "Marrom", inStock: true },
      
       
    ],
    sizes: [
      { size: "P", inStock: true },
      { size: "M", inStock: true },
      { size: "G", inStock: true }
    ]
  },
  
];
