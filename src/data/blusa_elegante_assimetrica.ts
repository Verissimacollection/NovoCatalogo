import { Product } from "@/interfaces/Product";

export const blusa_elegante_assimetrica: Product[] = [
    {
        id: 8001,
        name: "Blusa Elegance Assimétrica",
        price: 85.00,
        images: [
            "/images/blusa_elegante_assimetrica/WhatsApp Image 2026-02-12 at 21.56.04.jpeg",
        ],
        category: "Blusa",
        description: "Blusa Elegance Assimétrica R$85,00",
        sku: "8001",
        inStock: true,
        colors: [
            { color: "Preto", inStock: true },
            { color: "Bege", inStock: true },
            { color: "Branco", inStock: true },
        ],
        sizes: [
            { size: "P", inStock: true },
            { size: "M", inStock: true },
            { size: "G", inStock: true },
        ]
    },
];