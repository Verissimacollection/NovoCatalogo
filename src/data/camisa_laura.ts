import { Product } from "@/interfaces/Product";

// Exemplo de como estruturar produtos com múltiplos tamanhos
export const camisa_laura: Product[] = [
    {
        id: 3004,
        name: "Camisa Laura",  // Nome sem tamanho
        price: 50.00,
        images: [
            "/images/Camisas/camisa_laura/cinza.jpeg",
            "/images/Camisas/camisa_laura/cores.jpeg",

        ],
        category: "Camisas",
        description: "Camisa Laura Varejo R$70,00",
        sku: "3004",
        inStock: true,
        colors: [
            { color: "Cinza", inStock: true },
            { color: "Branco", inStock: true },
            { color: "Rosa", inStock: true },
            { color: "Azul", inStock: true },
            { color: "Verde", inStock: true },
            { color: "Bege", inStock: true },
            { color: "Pink", inStock: true },


        ],
        sizes: [
            { size: "P", inStock: true },
            { size: "M", inStock: true },
            { size: "G", inStock: true }
        ]
    },

];
