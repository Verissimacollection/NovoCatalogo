import { Product } from "@/interfaces/Product";

// Exemplo de como estruturar produtos com múltiplos tamanhos
export const vestido_Brisa_de_Verão: Product[] = [
    {
        id: 6549,
        name: "Vestido Brisa de Verão",  // Nome sem tamanho
        price: 190.00,
        images: [
            "/images/vestidos/Vestido Brisa de Verão/branco.jpeg",
             "/images/vestidos/Vestido Brisa de Verão/cores.jpeg",
          
        ],
        category: "Vestido",
        description: "Vestido Vestido Brisa de Verão Varejo R$220,00  ",
        sku: "304",
        inStock: true,
        colors: [
            { color: "Branco", inStock: true },
            { color: "Amarelo", inStock: true },
            { color: "Verde", inStock: true },
              { color: "Azul", inStock: true },
               
            
        ],
        sizes: [
            { size: "P", inStock: true },
            { size: "M", inStock: true },
            { size: "G", inStock: true },
            { size: "GG", inStock: true }
        ]
    },

];
