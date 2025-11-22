import { Product } from "@/interfaces/Product";

// Exemplo de como estruturar produtos com múltiplos tamanhos
export const vestido_amanda: Product[] = [
  {
    id: 123,
    name: "Vestido Amanda",  // Nome sem tamanho
    price: 220.00,
    images: [
      "/images/conjuntos/conjunto_amanda/branco.jpeg",
       "/images/conjuntos/conjunto_amanda/cores.jpeg",
      
    ],
    category: "Vestido",
    description: "Conjunto Amanda Varejo R&220,00 ",
    sku: "8331",
    inStock: true,
    colors: [
      { color: "Amarelo", inStock: true },
      { color: "Branco", inStock: true },
     
      { color: "Preto", inStock: true },
     

    ],
    sizes: [
      { size: "P", inStock: true },
      { size: "M", inStock: true },
      { size: "G", inStock: true }
    ]
  },


];
