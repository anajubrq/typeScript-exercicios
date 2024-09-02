"use strict";
/* Contexto: Você está desenvolvendo um sistema CRM (Customer Relationship Management) onde cada cliente é representado por um objeto contendo nome, email, idade, e uma lista de compras feitas, sendo cada compra um objeto com data e valor.
Tarefa: Crie uma função que receba o array de clientes e retorne um novo array onde cada cliente possui uma propriedade adicional "valorTotalCompras", que representa a soma de todos os valores de suas compras. Em seguida, ordene esse array de clientes pelo valor total de compras, do maior para o menor.*/
const clientes = [
    { nome: "Maria", email: "maria@gmail.com", idade: 30,
        compras: [
            { data: "2024-01-01", valor: 100 },
            { data: "2024-02-01", valor: 150 },
        ],
    },
    { nome: "João", email: "joao@gmail.com", idade: 25,
        compras: [
            { data: "2024-01-15", valor: 200 },
        ],
    },
    { nome: "Ana", email: "ana@gmail.com", idade: 19,
        compras: [
            { data: "2024-01-15", valor: 150 },
        ],
    },
    { nome: "Beatriz", email: "beatriz@gmail.com", idade: 18,
        compras: [
            { data: "2024-01-15", valor: 275 },
        ],
    },
    { nome: "Debora", email: "debora@gmail.com", idade: 45,
        compras: [
            { data: "2024-01-15", valor: 100 },
        ],
    },
    { nome: "Luana", email: "luana@gmail.com", idade: 24,
        compras: [
            { data: "2024-01-15", valor: 500 },
        ],
    },
];
function valorTotal(cliente) {
    const valorClientes = cliente.map(cliente => {
        const comprasTotal = cliente.compras.reduce((acc, compras) => acc + compras.valor, 0);
        return Object.assign(Object.assign({}, cliente), { comprasTotal });
    });
    valorClientes.sort((a, b) => b.comprasTotal - a.comprasTotal);
    return valorClientes;
}
