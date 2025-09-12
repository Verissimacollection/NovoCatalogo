import { Product } from "@/interfaces/Product";

// Exemplo de como estruturar produtos com múltiplos tamanhos
export const shorts_alfaiataria: Product[] = [
    {
        id: 9000,
        name: "Shorts Alfaiataria Premium",  // Nome sem tamanho
        price: 20.00,
        images: [
            
            "/images/alfaiataria premium/Shorts/cores.jpeg",
            

        ],
        category: "Shorts",
        description: "Shorts Alfaiataria Premium Varejo R$25,00",
        sku: "9000",
        inStock: true,
        colors: [
            { color: "Verde", inStock: true },
            { color: "Rosa", inStock: true },
            { color: "Preto", inStock: true },
            { color: "Azul", inStock: true },
            { color: "Vermelho", inStock: true },
            { color: "Cinza", inStock: true },
            { color: "Fucsia", inStock: true },
            { color: "Nude", inStock: true },
            { color: "Marrom", inStock: true },
            { color: "Off White", inStock: true },
                        
        ],
        sizes: [
            { size: "P", inStock: true },
            { size: "M", inStock: true },
            { size: "G", inStock: true },
             {size: "G", inStock: true },

        ]
    },

];
