import { Product } from "@/interfaces/Product";

// Exemplo de como estruturar produtos com múltiplos tamanhos
export const vestido_elisa: Product[] = [
    {
        id: 304,
        name: "Vestido Elisa",  // Nome sem tamanho
        price: 100.00,
        images: [
            
            "/images/vestidos/vestido_elisa/cinza.jpeg",
        ],
        category: "Vestido",
        description: "Vestido Elisa Varejo R$120,00  ",
        sku: "965",
        inStock: true,
        colors: [
            { color: "cinza", inStock: true },
           
        ],
        sizes: [
            { size: "U", inStock: true },
            
        ]
    },

];
