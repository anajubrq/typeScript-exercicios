/*Contexto: Você está desenvolvendo um sistema de registro de empregados para uma empresa. Cada empregado é representado por um objeto contendo name e, age.
Tarefa: Crie uma função que receba um array de empregados e retorne a média de, age deles.*/

export interface Employees {
    name:string,
    age:number
}

const employees:Employees[] = [
    { name: 'João', age: 20 },
    { name: 'Maria', age: 18 },
    { name: 'Ana', age: 21 },
    { name: 'Beatriz', age: 25 },
    { name: 'Emilly', age: 35 },
    { name: 'Amanda', age: 42 },
    { name: 'Paulo', age: 37}
]

export function calculateAverageAge (employees: Employees[]): number {
    const sumTheAges = employees.reduce((acumulado, employees) => acumulado + employees.age, 0);
    return sumTheAges / employees.length;
}

console.log(calculateAverageAge(employees)); 

