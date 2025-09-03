import { Product } from "@/interfaces/Product";

// Exemplo de como estruturar produtos com múltiplos tamanhos
export const vestido_dani: Product[] = [
    {
        id: 303,
        name: "Vestido Dani",  // Nome sem tamanho
        price: 120.00,
        images: [
            
            "/images/vestidos/vestido_dani/cores.jpeg",
        ],
        category: "Vestido",
        description: "Vestido Dani Varejo R$150,00  ",
        sku: "303",
        inStock: true,
        colors: [
            { color: "Branco", inStock: true },
            { color: "Preto", inStock: true },
            { color: "Verde", inStock: true },
            { color: "Bordo", inStock: true },
            { color: "Marrom Claro", inStock: true },
        ],
        sizes: [
            { size: "P", inStock: true },
            { size: "M", inStock: true },
            { size: "G", inStock: true }
        ]
    },

];
