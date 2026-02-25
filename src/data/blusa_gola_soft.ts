import { Product } from "@/interfaces/Product";

export const blusa_gola_soft: Product[] = [
    {
        id: 16001,
        name: "Blusa Gola Soft",
        price: 65.00,
        images: [
            "/images/Blusa Gola Soft/WhatsApp Image 2026-02-12 at 21.56.06.jpeg",
        ],
        category: "Blusa",
        description: "Blusa sem manga com gola drapeada que valoriza o colo. Modelo elegante e confortável, ideal para compor looks modernos.",
        sku: "16001",
        inStock: true,
        colors: [
            { color: "Off White", inStock: true },
            { color: "Azul", inStock: true },
            { color: "Branco", inStock: true },
            { color: "Preto", inStock: true },
        ],
        sizes: [
            { size: "P", inStock: true },
            { size: "M", inStock: true },
            { size: "G", inStock: true },
        ]
    },
];