import { Product } from "@/interfaces/Product";

// Exemplo de como estruturar produtos com múltiplos tamanhos
export const calca_viviane: Product[] = [
    {
        id: 8002,
        name: "Calça Viviane",  // Nome sem tamanho
        price: 80.00,
        images: [
            
            "/images/calca/calca_viviane/cores.jpeg",
            

        ],
        category: "Calça",
        description: "Calça Viviane Com Cinto Varejo R$90,00",
        sku: "8002",
        inStock: true,
        colors: [
            { color: "Azul", inStock: true },
            { color: "Preto", inStock: true },
            { color: "Rosa", inStock: true },
            { color: "Marrom", inStock: true },
            { color: "Off White", inStock: true },
            
        ],
        sizes: [
            { size: "P", inStock: true },
            { size: "M", inStock: true },
            { size: "G", inStock: true },

        ]
    },

];
