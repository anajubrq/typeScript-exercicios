/*  Você está desenvolvendo um sistema de gestão de estoque para uma loja. 
A loja possui um array de objetos, onde cada objeto representa um produto 
com propriedades como nome, preço e se está em estoque ou não.*/

// Adicionamos a palavra-chave 'export' à interface Produtos.
// Isso permite que a interface seja importada em outros arquivos, como nosso arquivo de teste.
export interface Produtos {
    nome: string;
    preco: number;
    estoque: boolean;
}

const produtos: Produtos[] = [
    { nome: "café", preco: 4.50, estoque: true },
    { nome: "açúcar", preco: 8, estoque: true },
    { nome: "leite", preco: 6, estoque: false },
    { nome: "sal", preco: 1.50, estoque: true }
];

// Adicionamos a palavra-chave 'export' à função produtosEmEstoque.
// Isso permite que a função seja importada e testada em outros arquivos.
// Também modificamos a função para aceitar um parâmetro 'produtos'.
// Isso torna a função mais flexível e facilita o teste com diferentes conjuntos de dados.
export function filterProductsInStock(produtos: Produtos[]): Produtos[] {
    return produtos.filter(produto => produto.estoque);
}

const emEstoque: Produtos[] = filterProductsInStock(produtos);
console.log(emEstoque);