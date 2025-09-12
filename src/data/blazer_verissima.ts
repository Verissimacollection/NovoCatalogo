import { Product } from "@/interfaces/Product";

// Exemplo de como estruturar produtos com múltiplos tamanhos
export const blazer_verissima: Product[] = [
    {
        id: 6000,
        name: "Blazer Verissima",  // Nome sem tamanho
        price: 150.00,
        images: [
            "/images/Blazer/cinza1.jpeg",
            "/images/Blazer/Cinza.jpeg",
            "/images/Blazer/marinho.jpeg",
            "/images/Blazer/preto.jpeg",
            "/images/Blazer/vermelho.jpeg",
            "/images/Blazer/cores.jpeg",


        ],
        category: "Blazer",
        description: "Blazer Verissima Varejo R$180,00",
        sku: "6000",
        inStock: true,
        colors: [
            { color: "Off White", inStock: true },
            { color: "Vermelho", inStock: true },
            { color: "Bege", inStock: true },
            { color: "Marinho", inStock: true },
            { color: "Azul Céu", inStock: true },
            { color: "Preto", inStock: true },
            { color: "Cinza", inStock: true },
            { color: "Azul Marinho", inStock: true },


        ],
        sizes: [
            { size: "P", inStock: true },
            { size: "M", inStock: true },
            { size: "G", inStock: true },

        ]
    },

];
