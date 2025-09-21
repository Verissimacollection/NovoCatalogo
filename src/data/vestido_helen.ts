import { Product } from "@/interfaces/Product";

// Exemplo de como estruturar produtos com múltiplos tamanhos
export const vestido_helen: Product[] = [
    {
        id: 300,
        name: "Vestido Helen",  // Nome sem tamanho
        price: 160.00,
        images: [
            "/images/vestidos/vestido_helen/branco.jpeg",
            "/images/vestidos/vestido_helen/cores.jpeg",

        ],
        category: "Vestido",
        description: "Vestido Helen R$150,00 Varejo R$180,00 Atacado",
        sku: "6358",
        inStock: true,
        colors: [
            { color: "Branco", inStock: true },
            { color: "Preto", inStock: true },
            { color: "Verde", inStock: true },
            { color: "Coral", inStock: true },
            { color: "Bege", inStock: true },
        ],
        sizes: [
            { size: "P", inStock: true },
            { size: "M", inStock: true },
            { size: "G", inStock: true }
        ]
    },

];
