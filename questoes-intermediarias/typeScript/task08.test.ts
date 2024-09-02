import { valorTotal, dadosClientes } from './task08';

describe('valorTotal', () => {
    it('Deve receber um array de clientes e retornar um novo array com o valor total das compras de cada cliente', () => {
        const clientes: dadosClientes[] = [
            { 
                nome: "Maria", 
                email: "maria@gmail.com", 
                idade: 30,
                compras: [
                    { data: "2024-01-01", valor: 100 },
                    { data: "2024-02-01", valor: 150 },
                ],
            },
            { 
                nome: "João", 
                email: "joao@gmail.com", 
                idade: 25,
                compras: [
                    { data: "2024-01-15", valor: 200 },
                ],
            },
            { 
                nome: "Ana", 
                email: "ana@gmail.com", 
                idade: 19,
                compras: [
                    { data: "2024-01-15", valor: 150 },
                ],
            },
            { 
                nome: "Beatriz", 
                email: "beatriz@gmail.com", 
                idade: 18,
                compras: [
                    { data: "2024-01-15", valor: 275 },
                ],
            },
            { 
                nome: "Debora", 
                email: "debora@gmail.com", 
                idade: 45,
                compras: [
                    { data: "2024-01-15", valor: 100 },
                ],
            },
            { 
                nome: "Luana", 
                email: "luana@gmail.com", 
                idade: 24,
                compras: [
                    { data: "2024-01-15", valor: 500 },
                ],
            },
        ];

        const result = valorTotal(clientes);

        const expected = [
            { nome: "Maria", total: 250 },
            { nome: "João", total: 200 },
            { nome: "Ana", total: 150 },
            { nome: "Beatriz", total: 275 },
            { nome: "Debora", total: 100 },
            { nome: "Luana", total: 500 }
        ];

        expect(result).toEqual(expected);
    });

    it('Deve retornar um array vazio se o array de clientes estiver vazio', () => {
        const clientes: dadosClientes[] = [];

        const result = valorTotal(clientes);

        expect(result).toEqual([]);
    });
});
