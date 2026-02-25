import { Product } from "@/interfaces/Product";

export const conjunto_alfaiataria_classic_premium: Product[] = [
    {
        id: 12002,
        name: "Conjunto Alfaiataria Classic Premium",
        price: 220.00,
        images: [

            "/images/Conjunto Blazer Tradicional/WhatsApp Image 2026-02-11 at 23.18.57.jpeg",
             "/images/Conjunto Blazer Tradicional/WhatsApp Image mo-02-11 at 23.18.57.jpeg",
        ],
        category: "Conjunto",
        description: "Conjunto composto por blazer estruturado com botão frontal e calça de alfaiataria reta. Modelo sofisticado que valoriza a silhueta e traz elegância atemporal.",
        sku: "12002",
        inStock: true,
        colors: [
            { color: "Marrom", inStock: true },
            { color: "Vinho", inStock: true },
            { color: "Bege", inStock: true },
            { color: "Azul Marinho", inStock: true },
            { color: "Preto", inStock: true },
        ],
        sizes: [
            { size: "P", inStock: true },
            { size: "M", inStock: true },
            { size: "G", inStock: true },
        ]
    },
];