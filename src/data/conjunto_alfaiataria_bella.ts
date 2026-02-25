import { Product } from "@/interfaces/Product";

export const conjunto_alfaiataria_bella: Product[] = [
    {
        id: 11001,
        name: "Conjunto Alfaiataria Bella",
        price: 220.00,
        images: [
            "/images/conjunto bela/WhatsApp Image 2026-02-11 at 23.18.56.jpeg",
            "/images/conjunto bela/cpnjunto.jpeg",
        ],
        category: "Conjunto",
        description: "Conjunto elegante composto por colete estruturado com cinto e calça de alfaiataria reta. Modelo sofisticado que valoriza a silhueta e é perfeito para ocasiões formais ou looks estilosos do dia a dia.",
        sku: "11001",
        inStock: true,
        colors: [
            { color: "Vinho", inStock: true },
            { color: "Azul Marinho", inStock: true },
            { color: "Marrom", inStock: true },
        ],
        sizes: [
            { size: "P", inStock: true },
            { size: "M", inStock: true },
            { size: "G", inStock: true },
        ]
    },
];