

import { projetoSemDependencia, DadosProjeto } from './task10';

describe('projetoSemDependencia', () => {


    it('Deve retornar projetos sem dependências ordenados por data de término do mais recente ao mais antigo', () => {
        const projetos: DadosProjeto[] = [
            { nome: "Luna", dataInicio: new Date("2024-04-30"), dataTermino: new Date("2024-05-15"),
                 dependencias: undefined },

            { nome: "Vox", dataInicio: new Date("2024-02-10"), dataTermino: new Date("2024-02-25"),
                 dependencias: [{ nome: "Orion", dataInicio: new Date("2024-06-01"), dataTermino: new Date("2024-06-30"), dependencias: undefined }] },

            { nome: "Zephyr", dataInicio: new Date("2024-06-05"), dataTermino: new Date("2024-06-20"),
                 dependencias: undefined },
            { nome: "Aura", dataInicio: new Date("2024-05-10"), dataTermino: new Date("2024-09-10"),
                 dependencias: undefined },

            { nome: "Flux", dataInicio: new Date("2024-01-30"), dataTermino: new Date("2024-09-25"),
                 dependencias: [{ nome: "Estrela", dataInicio: new Date("2024-07-01"), dataTermino: new Date("2024-07-31"), dependencias: undefined }] },

            { nome: "Nova", dataInicio: new Date("2024-03-30"), dataTermino: new Date("2024-09-15"),
                 dependencias: undefined },
            { nome: "Mira", dataInicio: new Date("2024-10-20"), dataTermino: new Date("2025-02-15"),
                 dependencias: [{ nome: "Estrela", dataInicio: new Date("2024-07-01"), dataTermino: new Date("2024-07-31"), dependencias: undefined }] },
            { nome: "Plex", dataInicio: new Date("2024-04-30"), dataTermino: new Date("2024-05-15"), dependencias: undefined }
        ];

        const resultado = projetoSemDependencia(projetos);

        expect(resultado).toEqual([
            { nome: "Aura", dataInicio: new Date("2024-05-10"), dataTermino: new Date("2024-09-10"), dependencias: undefined },

            { nome: "Nova", dataInicio: new Date("2024-03-30"), dataTermino: new Date("2024-09-15"), dependencias: undefined },

            { nome: "Zephyr", dataInicio: new Date("2024-06-05"), dataTermino: new Date("2024-06-20"), dependencias: undefined },

            { nome: "Luna", dataInicio: new Date("2024-04-30"), dataTermino: new Date("2024-05-15"), dependencias: undefined },

            { nome: "Plex", dataInicio: new Date("2024-04-30"), dataTermino: new Date("2024-05-15"), dependencias: undefined }
        ]);
    });

    
    it('Deve retornar um array vazio se todos os projetos tiverem dependências', () => {
        const projetosComDependencias: DadosProjeto[] = [
            { nome: "Vox", dataInicio: new Date("2024-02-10"), dataTermino: new Date("2024-02-25"), 
                dependencias: [{ nome: "Orion", dataInicio: new Date("2024-06-01"), dataTermino: new Date("2024-06-30"), dependencias: undefined }] },

            { nome: "Mira", dataInicio: new Date("2024-10-20"), dataTermino: new Date("2025-02-15"), dependencias: 
                [{ nome: "Estrela", dataInicio: new Date("2024-07-01"), dataTermino: new Date("2024-07-31"), dependencias: undefined }] }
        ];

        const resultado = projetoSemDependencia(projetosComDependencias);

        expect(resultado).toEqual([]);
    });

 
    it('Deve retornar todos os projetos ordenados por data de término quando nenhum projeto tiver dependências', () => {
        const projetosSemDependencias: DadosProjeto[] = [
            { nome: "Luna", dataInicio: new Date("2024-04-30"), dataTermino: new Date("2024-05-15"),
                 dependencias: undefined },

            { nome: "Zephyr", dataInicio: new Date("2024-06-05"), dataTermino: new Date("2024-06-20"), 
                dependencias: undefined },

            { nome: "Aura", dataInicio: new Date("2024-05-10"), dataTermino: new Date("2024-09-10"),
                 dependencias: undefined }
        ];

        const resultado = projetoSemDependencia(projetosSemDependencias);

        expect(resultado).toEqual([
            { nome: "Aura", dataInicio: new Date("2024-05-10"), dataTermino: new Date("2024-09-10"), 
                dependencias: undefined },

            { nome: "Zephyr", dataInicio: new Date("2024-06-05"), dataTermino: new Date("2024-06-20"),
                 dependencias: undefined },
            { nome: "Luna", dataInicio: new Date("2024-04-30"), dataTermino: new Date("2024-05-15"),
                 dependencias: undefined }
        ]);
    });

    // Teste 4: Projetos com datas de término iguais
    it('Deve manter a ordem original quando dois ou mais projetos têm a mesma data de término', () => {
        const projetosComMesmaDataTermino: DadosProjeto[] = [
            { nome: "Luna", dataInicio: new Date("2024-04-30"), dataTermino: new Date("2024-05-15"), dependencias: undefined },
            { nome: "Plex", dataInicio: new Date("2024-04-30"), dataTermino: new Date("2024-05-15"), dependencias: undefined }
        ];

        const resultado = projetoSemDependencia(projetosComMesmaDataTermino);

        expect(resultado).toEqual([
            { nome: "Luna", dataInicio: new Date("2024-04-30"), dataTermino: new Date("2024-05-15"), dependencias: undefined },
            { nome: "Plex", dataInicio: new Date("2024-04-30"), dataTermino: new Date("2024-05-15"), dependencias: undefined }
        ]);
    });

    
    it('Deve retornar um array vazio quando não há projetos', () => {
        const projetosVazios: DadosProjeto[] = [];

        const resultado = projetoSemDependencia(projetosVazios);

        expect(resultado).toEqual([]);
    });
});
