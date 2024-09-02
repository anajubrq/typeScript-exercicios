"use strict";
/*Contexto: Um sistema de streaming de filmes quer implementar uma recomendação baseada nos gêneros favoritos dos usuários. Cada usuário é representado por um objeto contendo nome, idade, e uma lista de gêneros favoritos. Cada filme é representado por um objeto com título, gênero, e avaliacao de avaliação.
Tarefa: Crie uma função que receba um array de usuários e um array de filmes, e retorne um novo objeto onde as chaves são os nomes dos usuários e os valores são arrays de filmes recomendados, baseados nos gêneros favoritos de cada usuário. A lista de filmes deve ser ordenada pela avaliacao de avaliação.*/
const usuarios = [
    { nome: 'Alice', idade: 30, generosFavoritos: ['Ficção Científica', 'Mistério'] },
    { nome: 'Bob', idade: 25, generosFavoritos: ['Romance', 'Fantasia'] },
    { nome: 'Ana', idade: 20, generosFavoritos: ['Terror', 'Mistério'] },
    { nome: 'Tatiane', idade: 25, generosFavoritos: ['Mistério', 'Fantasia'] }
];
const filmes = [
    { titulo: 'O Guia do Mochileiro das Galáxias', genero: 'Ficção Científica', avaliacao: 9.2 },
    { titulo: 'O Hobbit', genero: 'Fantasia', avaliacao: 8.5 },
    { titulo: 'A Garota no Trem', genero: 'Mistério', avaliacao: 7.8 },
    { titulo: 'Orgulho e Preconceito', genero: 'Romance', avaliacao: 9.0 },
    { titulo: 'Run', genero: 'Terror', avaliacao: 9.8 },
    { titulo: 'O filho protegido', genero: 'Romance', avaliacao: 9.0 }
];
function recomendarFilmes(usuarios, filmes) {
    return usuarios.reduce((resultado, usuario) => {
        const filmesRecomendados = filmes
            .filter(filme => usuario.generosFavoritos.includes(filme.genero))
            .sort((a, b) => b.avaliacao - a.avaliacao);
        resultado[usuario.nome] = filmesRecomendados;
        return resultado;
    }, {});
}
const recomendacoes = recomendarFilmes(usuarios, filmes);
console.log(recomendacoes);
