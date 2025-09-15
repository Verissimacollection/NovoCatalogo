
import { Product } from "@/interfaces/Product";

// Exemplo de como estruturar produtos com múltiplos tamanhos
export const vestido_roma: Product[] = [
  {
    id: 322,
    name: "Vestido Roma",  // Nome sem tamanho
    price: 180.00,
    images: [
      "/images/vestidos/vestido_roma/cores.jpeg",
    
    ],
    category: "Vestido",
    description: "Vestido Roma",
    sku: "322",
    inStock: true,
    colors: [
      { color: "Rosa", inStock: true },
      { color: "Azul", inStock: true },
      { color: "Branco", inStock: true },
      { color: "Amarelo", inStock: true },
      
      
    ],
    sizes: [
      { size: "P", inStock: true },
      { size: "M", inStock: true },
      { size: "G", inStock: true }
    ]
  },

  
];
