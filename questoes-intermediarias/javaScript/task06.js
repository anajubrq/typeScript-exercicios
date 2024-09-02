"use strict";
/* Contexto: Você está desenvolvendo um sistema de e-commerce e precisa implementar a lógica do carrinho de compras. Cada item no carrinho é representado por um objeto com as propriedades nome, preço, quantidade, e categoria.
Tarefa: Crie uma função que receba o array de itens do carrinho e retorne um objeto contendo o total de itens, o valor total do carrinho, e um resumo de categorias com a quantidade de itens em cada uma.*/
const carrinho = [
    { nome: 'Tênis', preco: 150, quantidade: 2, categoria: 'Calçados' },
    { nome: 'Camisa', preco: 50, quantidade: 3, categoria: 'Roupas' },
    { nome: 'Boné', preco: 25, quantidade: 1, categoria: 'Acessórios' }
];
function resumo(carrinho) {
    const totalItems = carrinho.reduce((acc, item) => acc + item.quantidade, 0);
    const valorTotal = carrinho.reduce((soma, item) => soma + (item.preco * item.quantidade), 0);
    const resumoCategorias = carrinho.reduce((resumo, { categoria, quantidade }) => {
        resumo[categoria] = (resumo[categoria] || 0) + quantidade;
        return resumo;
    }, {});
    return {
        totalItems,
        valorTotal,
        resumoCategorias
    };
}
console.log(resumo(carrinho));
