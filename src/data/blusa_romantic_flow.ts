import { Product } from "@/interfaces/Product";

export const blusa_romantic_flow: Product[] = [
    {
        id: 15001,
        name: "Blusa Romantic Flow",
        price: 130.00,
        images: [
            "/images/Blusa Romantic Flow/WhatsApp Image 2026-02-12 at 21.56.04.jpeg",
        ],
        category: "Blusa",
        description: "Blusa em tecido leve com babados frontais e mangas longas com acabamento delicado. Modelo elegante e fluido.",
        sku: "15001",
        inStock: true,
        colors: [
            { color: "Preto", inStock: true },
            { color: "Branco", inStock: true },
            { color: "Nude", inStock: true },
            { color: "Marrom", inStock: true },
            { color: "Rosé", inStock: true },
        ],
        sizes: [
            { size: "P", inStock: true },
            { size: "M", inStock: true },
            { size: "G", inStock: true },
        ]
    },
];