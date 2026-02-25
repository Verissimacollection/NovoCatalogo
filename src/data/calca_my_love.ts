import { Product } from "@/interfaces/Product";

// Exemplo de como estruturar produtos com múltiplos tamanhos
export const calca_my_love: Product[] = [
    {
        id: 888666,
        name: "Calça My Love",  // Nome sem tamanho
        price: 70.00,
        images: [
            
            "/images/calca_my_love/WhatsApp Image 2026-0a2-12 at 20.39.49.jpeg",
            "/images/calca_my_love/WhatsApp Image 2026-02-12 at 20.39.49.jpeg",
             "/images/calca_my_love/WhatsApp Image a2026-02-12 at 20.40.51.jpeg",
            
            

        ],
        category: "Calça",
        description: "Calça My Love Varejo R$70,00",
        sku: "8003",
        inStock: true,
        colors: [
            { color: "Bordo", inStock: true },
            { color: "Marrom", inStock: true },
            { color: "Preto", inStock: true },
                        
        ],
        sizes: [
            { size: "P", inStock: true },
            { size: "M", inStock: true },
            { size: "G", inStock: true },

        ]
    },

];
