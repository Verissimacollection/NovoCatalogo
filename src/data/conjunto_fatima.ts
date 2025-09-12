import { Product } from "@/interfaces/Product";

// Exemplo de como estruturar produtos com múltiplos tamanhos
export const conjunto_fatima: Product[] = [
    {
        id: 55,
        name: "Conjunto Fatima ",  // Nome sem tamanho
        price: 170.00,
        images: [
            "/images/conjuntos/conjunto_fatima/cores.jpeg",
        ],
        category: "Conjuntos",
        description: "Conjunto Fatima Varejo R$190,00",
        sku: "55",
        inStock: true,
        colors: [
            { color: "Azul", inStock: true },
            { color: "Branco", inStock: true },
            { color: "Verde", inStock: true },
            { color: "Preto", inStock: true },
            { color: "Rosa", inStock: true },

        ],
        sizes: [
            { size: "P", inStock: true },
            { size: "M", inStock: true },
            { size: "G", inStock: true },

        ]
    },

];
