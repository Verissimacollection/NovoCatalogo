import { Product } from "@/interfaces/Product";

export const conjunto_alfaiataria_risca_de_giz: Product[] = [
    {
        id: 9001,
        name: "Conjunto Alfaiataria Risca de Giz",
        price: 220.00,
        images: [
            "/images/conjunto risca de giz/WhatsApp Image 2026-02-12 at 21.01.24.jpeg",
        ],
        category: "Conjunto",
        description: "Conjunto sofisticado composto por colete alongado com cinto e calça de alfaiataria modelo pantalona. Perfeito para um look elegante e moderno.",
        sku: "9001",
        inStock: true,
        colors: [
            { color: "Marrom", inStock: true },
            { color: "Vinho", inStock: true },
            { color: "Azul", inStock: true },
            { color: "Preto", inStock: true },
        ],
        sizes: [
            { size: "P", inStock: true },
            { size: "M", inStock: true },
            { size: "G", inStock: true },
        ]
    },
];