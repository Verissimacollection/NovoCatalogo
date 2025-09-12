import { Product } from "@/interfaces/Product";

// Exemplo de como estruturar produtos com múltiplos tamanhos
export const calca_vera: Product[] = [
    {
        id: 8000,
        name: "Calça Vera",  // Nome sem tamanho
        price: 70.00,
        images: [
            "/images/calca/calca_vera/azul.jpeg",
            "/images/calca/calca_vera/cores.jpeg",
            

        ],
        category: "Calça",
        description: "Calça Vera Varejo R$80,00",
        sku: "8000",
        inStock: true,
        colors: [
            { color: "Cinza", inStock: true },
            { color: "Preto", inStock: true },
            { color: "Verde Militar", inStock: true },
            
        ],
        sizes: [
            { size: "P", inStock: true },
            { size: "M", inStock: true },
            { size: "G", inStock: true },

        ]
    },

];
