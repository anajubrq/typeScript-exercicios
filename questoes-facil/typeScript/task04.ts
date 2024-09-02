/*Contexto: Você está desenvolvendo um sistema de registro de empregados para uma empresa. Cada empregado é representado por um objeto contendo nome e idade.
Tarefa: Crie uma função que receba um array de empregados e retorne a média de idade deles.*/

interface Empregados {
    nome:string,
    idade:number
}

const empregados:Empregados[] = [
    { nome: 'João',idade: 20 },
    { nome: 'Maria',idade: 18 },
    { nome: 'Ana',idade: 21 },
    { nome: 'Beatriz',idade: 25 },
    { nome: 'Emilly',idade: 35 },
    { nome: 'Amanda',idade: 42 },
    { nome: 'Paulo',idade: 37}
]

function mediaIdade(empregados: Empregados[]): number {
    const somaIdade = empregados.reduce((acumulado, empregado) => acumulado + empregado.idade, 0);
    return somaIdade / empregados.length;
}

console.log(mediaIdade(empregados)); 

