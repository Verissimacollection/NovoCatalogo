import { Product } from "@/interfaces/Product";

// Exemplo de como estruturar produtos com múltiplos tamanhos
export const calca_beatriz: Product[] = [
    {
        id: 8003,
        name: "Calça Beatriz",  // Nome sem tamanho
        price: 70.00,
        images: [
            
            "/images/calca/calca_beatriz/verde.jpeg",
            

        ],
        category: "Calça",
        description: "Calça Beatriz Varejo R$80,00",
        sku: "8003",
        inStock: true,
        colors: [
            { color: "Verde", inStock: true },
            { color: "Bege", inStock: true },
            { color: "Preto", inStock: true },
                        
        ],
        sizes: [
            { size: "P", inStock: true },
            { size: "M", inStock: true },
            { size: "G", inStock: true },

        ]
    },

];
