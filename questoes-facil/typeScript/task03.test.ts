import { studentsSortedByGrade, Students } from './task03';

describe('studentsSortedByGrade', () => {
    it('Deve mostrar notas de alunos do maior para o menor', () => {
        const testStudents: Students[] = [
            { nome: 'João', nota: 6.75 },
            { nome: 'Maria', nota: 7 },
            { nome: 'Ana', nota: 8.50 },
            { nome: 'Beatriz', nota: 10 },
            { nome: 'Emilly', nota: 5.25 },
            { nome: 'Amanda', nota: 9.75 },
            { nome: 'Paulo', nota: 10 }
        ];

        const result = studentsSortedByGrade(testStudents);

        expect(result).toEqual([
            { nome: 'Beatriz', nota: 10 },
            { nome: 'Paulo', nota: 10 },
            { nome: 'Amanda', nota: 9.75 },
            { nome: 'Ana', nota: 8.50 },
            { nome: 'Maria', nota: 7 },
            { nome: 'João', nota: 6.75 },
            { nome: 'Emilly', nota: 5.25 }
        ]);
    });

    it('Deve retornar uma lista vazia quando não houver alunos', () => {
        const testStudents: Students[] = [];
    
        const result = studentsSortedByGrade(testStudents);
    
        expect(result).toEqual([]);
    });
    
});
