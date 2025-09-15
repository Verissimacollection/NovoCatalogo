import { Product } from "@/interfaces/Product";

// Exemplo de como estruturar produtos com múltiplos tamanhos
export const calca_Joyce: Product[] = [
    {
        id: 8004,
        name: "Calça Joyce",  // Nome sem tamanho
        price: 80.00,
        images: [
            
            "/images/calca/calca_joyce/cores.jpeg",
            

        ],
        category: "Calça",
        description: "Calça Joyce Varejo R$90,00",
        sku: "8004",
        inStock: true,
        colors: [
            { color: "Azul", inStock: true },
            { color: "Preto", inStock: true },
            { color: "Branco", inStock: true },
            { color: "Bege", inStock: true },
            
        ],
        sizes: [
            { size: "P", inStock: true },
            { size: "M", inStock: true },
            { size: "G", inStock: true },

        ]
    },

];
