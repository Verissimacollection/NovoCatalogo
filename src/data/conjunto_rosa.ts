import { Product } from "@/interfaces/Product";

// Exemplo de como estruturar produtos com múltiplos tamanhos
export const conjunto_rosa: Product[] = [
    {
        id: 54,
        name: "Conjunto Rosa ",  // Nome sem tamanho
        price: 170.00,
        images: [
            "/images/conjuntos/conjunto_rosa/cores.jpeg",
        ],
        category: "Conjuntos",
        description: "Conjunto Rosa Varejo R$180,00",
        sku: "54",
        inStock: true,
        colors: [
            { color: "Azul", inStock: true },
            { color: "Branco", inStock: true },
            { color: "Verde", inStock: true },
            { color: "Preto", inStock: true },

        ],
        sizes: [
            { size: "P", inStock: true },
            { size: "M", inStock: true },
            { size: "G", inStock: true },

        ]
    },

];
