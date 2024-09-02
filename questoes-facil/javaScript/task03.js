"use strict";
/* Contexto: Uma escola está desenvolvendo um sistema de gerenciamento de alunos, onde cada aluno é representado por um objeto contendo as propriedades nome e nota.
Tarefa: Crie uma função que receba um array de alunos e retorne um novo array com os alunos ordenados por nota, do maior para o menor.*/
const alunos = [
    { nome: 'João', nota: 6.75 },
    { nome: 'Maria', nota: 7 },
    { nome: 'Ana', nota: 8.50 },
    { nome: 'Beatriz', nota: 10 },
    { nome: 'Emilly', nota: 5.25 },
    { nome: 'Amanda', nota: 9.75 },
    { nome: 'Paulo', nota: 10 }
];
function ordemDecrescente(alunos) {
    return alunos.slice().sort((a, b) => b.nota - a.nota);
}
const alunosOrdenados = ordemDecrescente(alunos);
console.log(alunosOrdenados);
