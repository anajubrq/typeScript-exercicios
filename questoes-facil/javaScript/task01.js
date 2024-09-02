"use strict";
const produtos = [
    { nome: "café", preco: 4.50, estoque: true },
    { nome: "açúcar", preco: 8, estoque: true },
    { nome: "leite", preco: 6, estoque: false },
    { nome: "sal", preco: 1.50, estoque: true }
];
function produtosEmEstoque() {
    return produtos.filter(produto => produto.estoque);
}
const emEstoque = produtosEmEstoque();
console.log(emEstoque);
