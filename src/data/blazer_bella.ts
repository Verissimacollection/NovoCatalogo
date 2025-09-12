import { Product } from "@/interfaces/Product";

// Exemplo de como estruturar produtos com múltiplos tamanhos
export const blazer_bella: Product[] = [
    {
        id: 6001,
        name: "Blazer Bella",  // Nome sem tamanho
        price: 100.00,
        images: [
            "/images/Blazer/blazer_bella/preto.jpeg",
            "/images/Blazer/blazer_bella/nude.jpeg",
            "/images/Blazer/blazer_bella/nude1.jpeg",
            "/images/Blazer/blazer_bella/marinho.jpeg",
            "/images/Blazer/blazer_bella/marinho1.jpeg",
            "/images/Blazer/blazer_bella/beje.jpeg",
            "/images/Blazer/blazer_bella/cores.jpeg",
            
        ],
        category: "Blazer",
        description: "Blazer Verissima Varejo R$120,00",
        sku: "6001",
        inStock: true,
        colors: [
            { color: " Marinho", inStock: true },
            { color: "Preto", inStock: true },
            { color: "Bege", inStock: true },
            { color: "Nude", inStock: true },
            

        ],
        sizes: [
            { size: "P", inStock: true },
            { size: "M", inStock: true },
            { size: "G", inStock: true },
            { size: "GG", inStock: true },

        ]
    },

];
