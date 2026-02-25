import { Product } from "@/interfaces/Product";

export const conjunto_alfaiataria_urban: Product[] = [
    {
        id: 14001,
        name: "Conjunto Alfaiataria Urban",
        price: 175.00,
        images: [],
        category: "Conjunto",
        description: "Conjunto composto por colete estruturado com cinto e short de alfaiataria com botões frontais. Moderno, elegante e perfeito para looks estilosos.",
        sku: "14001",
        inStock: true,
        colors: [
            { color: "Preto", inStock: true },
            { color: "Branco", inStock: true },
            { color: "Bege", inStock: true },
            { color: "Verde Militar", inStock: true },
        ],
        sizes: [
            { size: "P", inStock: true },
            { size: "M", inStock: true },
            { size: "G", inStock: true },
        ]
    },
];