import { Product } from "@/interfaces/Product";

// Exemplo de como estruturar produtos com múltiplos tamanhos
export const conjunto_roseli: Product[] = [
  {
    id: 5502,
    name: "Conjunto Roseli",  // Nome sem tamanho
    price: 200.00,
    images: [
      "/images/conunto roseli/bordo.jpeg",
       "/images/conunto roseli/cores.jpeg",
      
    ],
    category: "Conjuntos",
    description: "Camisa Varejo R$220,00",
    sku: "300",
    inStock: true,
    colors: [
      { color: "Beje", inStock: true },
      { color: "Branco", inStock: true },
      { color: "Marinho", inStock: true },
      { color: "Bordo", inStock: true },
      { color: "Vermelho", inStock: true },
       
    ],
    sizes: [
      { size: "P", inStock: true },
      { size: "M", inStock: true },
      { size: "G", inStock: true }
    ]
  },
  
];
