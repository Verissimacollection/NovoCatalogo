import { Product } from "@/interfaces/Product";

// Exemplo de como estruturar produtos com múltiplos tamanhos
export const camisa_mariaflor: Product[] = [
    {
        id: 3005,
        name: "Camisa Maria Flor",  // Nome sem tamanho
        price: 75.00,
        images: [
            "/images/Camisas/camisa_mariaflor/cores.jpeg",
            

        ],
        category: "Camisas",
        description: "Camisa Maria Flor Varejo R$85,00",
        sku: "3005",
        inStock: true,
        colors: [
            { color: "Cinza", inStock: true },
            { color: "Branco", inStock: true },
            { color: "Off White", inStock: true },
            { color: "Verde", inStock: true },
            { color: "Azul", inStock: true },
           


        ],
        sizes: [
            { size: "P", inStock: true },
            { size: "M", inStock: true },
            { size: "G", inStock: true }
        ]
    },

];
