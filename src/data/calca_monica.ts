import { Product } from "@/interfaces/Product";

// Exemplo de como estruturar produtos com múltiplos tamanhos
export const calca_monica: Product[] = [
    {
        id: 8001,
        name: "Calça Monica",  // Nome sem tamanho
        price: 80.00,
        images: [
            
            "/images/calca/calca_monica/cores.jpeg",
            

        ],
        category: "Calça",
        description: "Calça Monica Varejo R$95,00",
        sku: "8001",
        inStock: true,
        colors: [
            { color: "Azul", inStock: true },
            { color: "Preto", inStock: true },
            { color: "Rosa", inStock: true },
            { color: "Caramelo", inStock: true },
            
        ],
        sizes: [
            { size: "P", inStock: true },
            { size: "M", inStock: true },
            { size: "G", inStock: true },

        ]
    },

];
