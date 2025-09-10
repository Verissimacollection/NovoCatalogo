import { Product } from "@/interfaces/Product";

// Exemplo de como estruturar produtos com múltiplos tamanhos
export const regata_iza: Product[] = [
    {
        id: 754,
        name: "Regata Iza",  // Nome sem tamanho
        price: 25.00,
        images: [

            "/images/regatas/regata_iza/cores.jpeg",
        ],
        category: "Regata",
        description: "Regata Iza Varejo R$35,00",
        sku: "754",
        inStock: true,
        colors: [
            { color: "Branco", inStock: true },
            { color: "Cinza", inStock: true },
            { color: "Bege", inStock: true },
            { color: "Preto", inStock: true },
            { color: "Verde", inStock: true },
            { color: "Listrada", inStock: true },


        ],
        sizes: [
            { size: "U", inStock: true },

        ]
    },


];
