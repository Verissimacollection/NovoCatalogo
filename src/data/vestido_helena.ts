
import { Product } from "@/interfaces/Product";

// Exemplo de como estruturar produtos com múltiplos tamanhos
export const vestido_helena: Product[] = [
    {
        id: 324,
        name: "Vestido Helena",  // Nome sem tamanho
        price: 190.00,
        images: [
            "/images/vestidos/vestido_helena/vermelho.jpeg",
            "/images/vestidos/vestido_helena/amarelo.jpeg",
            "/images/vestidos/vestido_helena/preto.jpeg",
            "/images/vestidos/vestido_helena/branco.jpeg",
            "/images/vestidos/vestido_helena/cores.jpeg",

        ],
        category: "Vestido",
        description: "Vestido Helena",
        sku: "324",
        inStock: true,
        colors: [
            { color: "Vermelho", inStock: true },
            { color: "Branco", inStock: true },
            { color: "Preto", inStock: true },
            { color: "Amarelo", inStock: true },


        ],
        sizes: [
            { size: "P", inStock: true },
            { size: "M", inStock: true },
            { size: "G", inStock: true }
        ]
    },


];
