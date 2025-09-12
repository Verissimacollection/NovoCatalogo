import { Product } from "@/interfaces/Product";

// Exemplo de como estruturar produtos com múltiplos tamanhos
export const vestido_carmen: Product[] = [
    {
        id: 304,
        name: "Vestido Carmen",  // Nome sem tamanho
        price: 130.00,
        images: [
            "/images/vestidos/vestido_carmen/preto.jpeg",
            "/images/vestidos/vestido_carmen/azul.jpeg",
            "/images/vestidos/vestido_carmen/branco.jpeg",
            "/images/vestidos/vestido_carmen/marrom.jpeg",
            "/images/vestidos/vestido_carmen/rosa.jpeg",
            "/images/vestidos/vestido_carmen/cores.jpeg",
        ],
        category: "Vestido",
        description: "Vestido Carmen Varejo R$150,00  ",
        sku: "304",
        inStock: true,
        colors: [
            { color: "Branco", inStock: true },
            { color: "Preto", inStock: true },
            { color: "Azul", inStock: true },
            { color: "Rosa", inStock: true },
            { color: "Marrom", inStock: true },
        ],
        sizes: [
            { size: "P", inStock: true },
            { size: "M", inStock: true },
            { size: "G", inStock: true },
            { size: "GG", inStock: true }
        ]
    },

];
