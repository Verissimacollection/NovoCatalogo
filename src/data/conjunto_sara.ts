import { Product } from "@/interfaces/Product";

// Exemplo de como estruturar produtos com múltiplos tamanhos
export const conjunto_sara: Product[] = [
    {
        id: 31,
        name: "Conjunto Sara ",  // Nome sem tamanho
        price: 140.00,
        images: [
            "/images/conjuntos/conjunto_sara/cores.jpeg",
        ],
        category: "Conjuntos",
        description: "Conjunto Sara Varejo R$160,00",
        sku: "31",
        inStock: true,
        colors: [
            { color: "Bege", inStock: true },
            { color: "Preto", inStock: true },
            { color: "Cinza", inStock: true },
            { color: "Azul Bebe", inStock: true },

        ],
        sizes: [
            { size: "P", inStock: true },
            { size: "M", inStock: true },
            { size: "G", inStock: true },
            { size: "G", inStock: true }
        ]
    },

];
