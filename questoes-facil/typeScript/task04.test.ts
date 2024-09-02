import { calculateAverageAge, Employees } from './task04';

describe('calculateAverageAge',()=>{
 
    it('Deve somar e encontrar a media de idades',()=>{
         const employees:Employees[] = [
            { name: 'João', age: 20 },
            { name: 'Maria', age: 18 },
            { name: 'Ana', age: 21 },
           
        ]
        const result = calculateAverageAge(employees);

        const expectedAverage = (20 + 18 + 21) / 3; 
        expect(expectedAverage)
    })

    it('Deve retornart vazio quando não tiver nenhuma idade para somar',()=>{
     const employees:Employees[]=[]
     const result= calculateAverageAge(employees);
     expect(result + ('Sem valor '))
    })


})