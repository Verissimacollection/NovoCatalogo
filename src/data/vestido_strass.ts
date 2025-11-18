import { Product } from "@/interfaces/Product";

// Exemplo de como estruturar produtos com múltiplos tamanhos
export const vestido_strass: Product[] = [
    {
        id: 350,
        name: "Vestido Strass",  // Nome sem tamanho
        price: 190.00,
        images: [
            "/images/vestidos/vestido_strass/branco.webp",
             "/images/vestidos/vestido_strass/cores.webp",
          
        ],
        category: "Vestido",
        description: "Vestido Strass Varejo R$220,00  ",
        sku: "304",
        inStock: true,
        colors: [
            { color: "Branco", inStock: true },
            { color: "Preto", inStock: true },
            { color: "Vermelho", inStock: true },
            
        ],
        sizes: [
            { size: "P", inStock: true },
            { size: "M", inStock: true },
            { size: "G", inStock: true },
            { size: "GG", inStock: true }
        ]
    },

];
