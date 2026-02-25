import { Product } from "@/interfaces/Product";

export const saia_alfaiataria_chic: Product[] = [
    {
        id: 13001,
        name: "Saia Alfaiataria Chic",
        price: 110.00,
        images: [
            "/images/Saia Alfaiataria Chic/WhatsApp Image 2s026-02-12 at 21.11.48.jpeg",
            "/images/Saia Alfaiataria Chic/modelo.jpeg",
        ],
        category: "Saia",
        description: "Saia modelo reta com acabamento refinado e detalhe de bolso frontal decorativo. Peça elegante e versátil para compor looks sofisticados.",
        sku: "13001",
        inStock: true,
        colors: [
            { color: "Preto", inStock: true },
            { color: "Marrom", inStock: true },
            { color: "Vinho", inStock: true },
            { color: "Off White", inStock: true },
        ],
        sizes: [
            { size: "P", inStock: true },
            { size: "M", inStock: true },
            { size: "G", inStock: true },
        ]
    },
];