import { Product } from "@/interfaces/Product";

export const conjunto_alfaiataria_elegance: Product[] = [
    {
        id: 12001,
        name: "Conjunto Alfaiataria Elegance",
        price: 220.00,
        images: [
            "/images/Conjunto Colete com Cinto/WhatsApp Image 2026-0aa2-11 at 23.18.58.jpeg",
        ],
        category: "Conjunto",
        description: "Conjunto composto por colete estruturado com cinto e calça de alfaiataria reta. Modelo moderno, elegante e perfeito para trabalho ou eventos.",
        sku: "12001",
        inStock: true,
        colors: [
            { color: "Azul Marinho", inStock: true },
            { color: "Marrom", inStock: true },
            { color: "Vinho", inStock: true },
            { color: "Bege", inStock: true },
            { color: "Off White", inStock: true },
        ],
        sizes: [
            { size: "P", inStock: true },
            { size: "M", inStock: true },
            { size: "G", inStock: true },
        ]
    },
];