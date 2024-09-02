/*  Você está desenvolvendo um sistema de gestão de estoque para uma loja. A loja possui um array de objetos, onde cada objeto representa um produto com propriedades como nome, preço e se está em estoque ou não.*/
interface Produtos {
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

function produtosEmEstoque(): Produtos[] {
    return produtos.filter(produto => produto.estoque);
}

const emEstoque: Produtos[] = produtosEmEstoque();

console.log(emEstoque);
