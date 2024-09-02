import { recomendarFilmes, Usuarios, Filmes, Recomendacoes } from './task09';

describe('recomendarFilmes', () => {
    it('Deve recomendar filmes com base nos gêneros favoritos dos usuários', () => {
        const usuarios: Usuarios[] = [
            { nome: 'Alice', idade: 30, generosFavoritos: ['Ficção Científica', 'Mistério'] },
            { nome: 'Bob', idade: 25, generosFavoritos: ['Romance', 'Fantasia'] },
            { nome: 'Ana', idade: 20, generosFavoritos: ['Terror', 'Mistério'] },
            { nome: 'Tatiane', idade: 25, generosFavoritos: ['Mistério', 'Fantasia'] }
        ];
        
        const filmes: Filmes[] = [
            { titulo: 'O Guia do Mochileiro das Galáxias', genero: 'Ficção Científica', avaliacao: 9.2 },
            { titulo: 'O Hobbit', genero: 'Fantasia', avaliacao: 8.5 },
            { titulo: 'A Garota no Trem', genero: 'Mistério', avaliacao: 7.8 },
            { titulo: 'Orgulho e Preconceito', genero: 'Romance', avaliacao: 9.0 },
            { titulo: 'Run', genero: 'Terror', avaliacao: 9.8 },
            { titulo: 'O filho protegido', genero: 'Romance', avaliacao: 9.0 }
        ];

        const recomendacoes: Recomendacoes = recomendarFilmes(usuarios, filmes);

        const expected: Recomendacoes = {
            Alice: [
                { titulo: 'O Guia do Mochileiro das Galáxias', genero: 'Ficção Científica', avaliacao: 9.2 },
                { titulo: 'A Garota no Trem', genero: 'Mistério', avaliacao: 7.8 }
            ],
            Bob: [
                { titulo: 'Orgulho e Preconceito', genero: 'Romance', avaliacao: 9.0 },
                { titulo: 'O filho protegido', genero: 'Romance', avaliacao: 9.0 },
                { titulo: 'O Hobbit', genero: 'Fantasia', avaliacao: 8.5 }
            ],
            Ana: [
                { titulo: 'Run', genero: 'Terror', avaliacao: 9.8 },
                { titulo: 'A Garota no Trem', genero: 'Mistério', avaliacao: 7.8 }
            ],
            Tatiane: [
                { titulo: 'O Hobbit', genero: 'Fantasia', avaliacao: 8.5 },
                { titulo: 'A Garota no Trem', genero: 'Mistério', avaliacao: 7.8 }
            ]
        };

        expect(recomendacoes).toEqual(expected);
    });

    
    it('Deve retornar um objeto vazio quando não há filmes disponíveis', () => {
        const usuarios: Usuarios[] = [
            { nome: 'Alice', idade: 30, generosFavoritos: ['Ficção Científica', 'Mistério'] }
        ];
        
        const filmes: Filmes[] = [];

        const recomendacoes = recomendarFilmes(usuarios, filmes);

        expect(recomendacoes).toEqual({
            Alice: []
        });
    });

    
    it('Deve retornar um objeto vazio quando não há usuários', () => {
        const usuarios: Usuarios[] = [];
        
        const filmes: Filmes[] = [
            { titulo: 'O Guia do Mochileiro das Galáxias', genero: 'Ficção Científica', avaliacao: 9.2 }
        ];

        const recomendacoes = recomendarFilmes(usuarios, filmes);

        expect(recomendacoes).toEqual({});
    });

    
    it('Deve retornar uma lista vazia de recomendações para usuários cujos gêneros favoritos não correspondem a nenhum filme', () => {
        const usuarios: Usuarios[] = [
            { nome: 'Alice', idade: 30, generosFavoritos: ['Drama'] }
        ];
        
        const filmes: Filmes[] = [
            { titulo: 'O Guia do Mochileiro das Galáxias', genero: 'Ficção Científica', avaliacao: 9.2 }
        ];

        const recomendacoes = recomendarFilmes(usuarios, filmes);

        expect(recomendacoes).toEqual({
            Alice: []
        });
    });
});
