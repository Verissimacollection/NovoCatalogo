import { Product } from "@/interfaces/Product";

// Exemplo de como estruturar produtos com múltiplos tamanhos
export const vestido_tubinho: Product[] = [
    {
        id: 351,
        name: "Vestido Tubinho",  // Nome sem tamanho
        price: 190.00,
        images: [
            "/images/vestidos/vestido_tubinho/branco.webp",
             "/images/vestidos/vestido_tubinho/preto.webp",
              "/images/vestidos/vestido_tubinho/cores.webp",
            
          
        ],
        category: "Vestido",
        description: "Vestido Tubinho Varejo R$220,00  ",
        sku: "304",
        inStock: true,
        colors: [
            { color: "Branco", inStock: true },
            { color: "Preto", inStock: true },
            
                { color: "Vermelho", inStock: true },
            
        ],
        sizes: [
            { size: "P", inStock: true },
            { size: "M", inStock: true },
            { size: "G", inStock: true },
            { size: "GG", inStock: true }
        ]
    },

];
