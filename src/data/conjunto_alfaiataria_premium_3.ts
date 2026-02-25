import { Product } from "@/interfaces/Product";

export const conjunto_alfaiataria_premium_3: Product[] = [
    {
        id: 10001,
        name: "Conjunto Alfaiataria Premium",
        price: 220.00,
        images: [
            "/images/alfaiatariapremium1/WhatsApp Image 2026-02-11 at 23.18.56.jpeg",
        ],
        category: "Conjunto",
        description: "Conjunto elegante composto por colete transpassado com amarração lateral e calça de alfaiataria reta. Modelo sofisticado, ideal para looks modernos e versáteis.",
        sku: "10001",
        inStock: true,
        colors: [
            { color: "Marrom", inStock: true },
            { color: "Caramelo", inStock: true },
            { color: "Vinho", inStock: true },
            { color: "Preto", inStock: true },
        ],
        sizes: [
            { size: "P", inStock: true },
            { size: "M", inStock: true },
            { size: "G", inStock: true },
        ]
    },
];