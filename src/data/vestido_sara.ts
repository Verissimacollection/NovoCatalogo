import { Product } from "@/interfaces/Product";

// Exemplo de como estruturar produtos com múltiplos tamanhos
export const vestido_sara: Product[] = [
    {
        id: 4000,
        name: "Vestido Sara",  // Nome sem tamanho
        price: 220.00,
        images: [
            
            "/images/vestidos/vestido_sara/preto.png",
            "/images/vestidos/vestido_sara/branco.png",
            "/images/vestidos/vestido_sara/vermelho.png",
            "/images/vestidos/vestido_sara/amarelo.png",
        ],
        category: "Vestido",
        description: "Vestido Sara Varejo R$220,00  ",
        sku: "303",
        inStock: true,
        colors: [
            { color: "Branco", inStock: true },
            { color: "Preto", inStock: true },
            { color: "Vermelho", inStock: true },
            { color: "Amarelo", inStock: true },
           
        ],
        sizes: [
            { size: "P", inStock: true },
            { size: "M", inStock: true },
            { size: "G", inStock: true }
        ]
    },

];
