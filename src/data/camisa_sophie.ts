import { Product } from "@/interfaces/Product";

// Exemplo de como estruturar produtos com múltiplos tamanhos
export const camisa_sophie: Product[] = [
  {
    id: 3003,
    name: "Camisa Sophie",  // Nome sem tamanho
    price: 50.00,
    images: [
      "/images/Camisas/camisa_sophie/cores.jpeg",
    
    ],
    category: "Camisas",
    description: "Camisa Sophie Varejo R$70,00",
    sku: "3003",
    inStock: true,
    colors: [
      { color: "Branco", inStock: true },
      { color: "Rosa", inStock: true },
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
