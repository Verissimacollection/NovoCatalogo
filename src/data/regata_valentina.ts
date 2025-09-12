import { Product } from "@/interfaces/Product";

// Exemplo de como estruturar produtos com múltiplos tamanhos
export const regata_valentina: Product[] = [
    {
        id: 756,
        name: "Regata Valentina",  // Nome sem tamanho
        price: 25.00,
        images: [

            "/images/regatas/regata_valentina/cores.jpeg",
        ],
        category: "Regata",
        description: "Regata Valentina Varejo R$35,00",
        sku: "756",
        inStock: true,
        colors: [
            { color: "Branco", inStock: true },
            { color: "Amarelo", inStock: true },
            { color: "Bege", inStock: true },
            { color: "Preto", inStock: true },
            { color: "Marrom", inStock: true },
            { color: "Pink", inStock: true },


        ],
        sizes: [
            { size: "U", inStock: true },

        ]
    },


];
