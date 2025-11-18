import { Product } from "@/interfaces/Product";

// Exemplo de como estruturar produtos com múltiplos tamanhos
export const vestido_laise: Product[] = [
    {
        id: 356,
        name: "Vestido Laise",  // Nome sem tamanho
        price: 190.00,
        images: [
            "/images/vestidos/vestido_laise/amarelo.webp",
             "/images/vestidos/vestido_laise/cores.webp",
          
        ],
        category: "Vestido",
        description: "Vestido Laise Varejo R$220,00  ",
        sku: "304",
        inStock: true,
        colors: [
            { color: "Branco", inStock: true },
            { color: "Amarelo", inStock: true },
            { color: "Verde", inStock: true },
              { color: "Azul", inStock: true },
                { color: "Rosa", inStock: true },
            
        ],
        sizes: [
            { size: "P", inStock: true },
            { size: "M", inStock: true },
            { size: "G", inStock: true },
            { size: "GG", inStock: true }
        ]
    },

];
