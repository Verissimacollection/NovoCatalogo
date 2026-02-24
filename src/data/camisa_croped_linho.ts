import { Product } from "@/interfaces/Product";

// Exemplo de como estruturar produtos com múltiplos tamanhos
export const camisa_croped_linho: Product[] = [
  {
    id: 5501,
    name: "Camisa Croped Linho",  // Nome sem tamanho
    price: 140.00,
    images: [
      "/images/camisa croped linho/camisa_croped_linho.jpeg",
      
    ],
    category: "Camisas",
    description: "Camisa Varejo R$180,00",
    sku: "300",
    inStock: true,
    colors: [
      { color: "Beje", inStock: true },
      { color: "Verde", inStock: true },
      { color: "Rosa", inStock: true },
      { color: "Marrom", inStock: true },
      { color: "Vermelho", inStock: true },
       
    ],
    sizes: [
      { size: "P", inStock: true },
      { size: "M", inStock: true },
      { size: "G", inStock: true }
    ]
  },
  
];
