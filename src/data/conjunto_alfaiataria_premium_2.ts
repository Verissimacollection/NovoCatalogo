import { Product } from "@/interfaces/Product";

// Exemplo de como estruturar produtos com múltiplos tamanhos
export const conjunto_alfaiataria_premium_2: Product[] = [
  {
    id: 6601,
    name: "Conjunto Alfaiataria Premuim 2",  // Nome sem tamanho
    price: 190.00,
    images: [
      
      "/images/alfaiataria_premium/conjunto_premium_2/alfaiataria_cores.jpeg",
      
    ],
    category: "Conjunto",
    description: "Conjunto Alfaiataria Premium 2 Varejo R&220,00 ",
    sku: "6601",
    inStock: true,
    colors: [
      { color: "Marinho", inStock: true },
      { color: "Off White", inStock: true },
      { color: "Marrom", inStock: true },
       { color: "Bordo", inStock: true },
      { color: "Amarelo", inStock: true },
     

    ],
    sizes: [
      { size: "P", inStock: true },
      { size: "M", inStock: true },
      { size: "G", inStock: true }
    ]
  },


];
