import { Product } from "@/interfaces/Product";

// Exemplo de como estruturar produtos com múltiplos tamanhos
export const blazer_premium: Product[] = [
    {
        id: 7500,
        name: "Blazer Premium",  // Nome sem tamanho
        price: 190.00,
        images: [
            "/images/Blazer/blazer_premium/cinza1.jpeg",
            


        ],
        category: "Blazer",
        description: "Blazer Premium Varejo R$230,00",
        sku: "7500",
        inStock: true,
        colors: [
            { color: "Off White", inStock: true },
            { color: "Roxo", inStock: true },
            { color: "Verde", inStock: true },
            { color: "Marinho", inStock: true },
            { color: "Preto", inStock: true },
            { color: "Marrom", inStock: true },
            


        ],
        sizes: [
            { size: "P", inStock: true },
            { size: "M", inStock: true },
            { size: "G", inStock: true },

        ]
    },

];
