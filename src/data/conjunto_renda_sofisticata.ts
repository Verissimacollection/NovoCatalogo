import { Product } from "@/interfaces/Product";

export const conjunto_renda_sofisticata: Product[] = [
    {
        id: 17001,
        name: "Conjunto Renda Sofisticata",
        price: 220.00,
        images: [
            "/images/Conjunto Renda Sofisticata/WhatsApp Image 20as26-02-12 at 21.12.57.jpeg",
            "/images/Conjunto Renda Sofisticata/modelo1.jpeg",
        ],
        category: "Conjunto",
        description: "Conjunto elegante composto por camisa em renda com gola estruturada e punhos marcados, acompanhado de calça de alfaiataria reta. Modelo refinado e feminino, ideal para ocasiões especiais ou produções sofisticadas.",
        sku: "17001",
        inStock: true,
        colors: [
            { color: "Marrom", inStock: true },
            { color: "Vinho", inStock: true },
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