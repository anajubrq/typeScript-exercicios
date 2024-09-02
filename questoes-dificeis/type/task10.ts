/* Você está desenvolvendo um sistema de gestão de projetos onde cada projeto é representado por um objeto contendo o nome do projeto, a data de início, a data de término prevista, e uma lista de dependências. Cada dependência é outro projeto que deve ser concluído antes que o projeto atual possa começar.
Tarefa: Crie uma função que receba um array de projetos e retorne uma lista ordenada de projetos de modo que cada projeto só apareça após todas as suas dependências terem sido concluídas. Se houver dependências cíclicas (projetos que dependem uns dos outros em um ciclo), a função deve detectá-las e lançar um erro apropriado.*/
export interface DadosProjeto {
    nome: string;
    dataInicio: Date;
    dataTermino: Date;
    dependencias?:DadosProjeto[]; 
}



const projetos: DadosProjeto[] = [  

    {
        nome: "Luna", 
        dataInicio: new Date("2024-04-30"), 
        dataTermino: new Date("2024-05-15"), 
        dependencias: undefined
    },
    {
        nome: "Vox", 
        dataInicio: new Date("2024-02-10"),
        dataTermino: new Date("2024-02-25"), 
        dependencias:[{
            nome: "Orion",
            dataInicio: new Date("2024-06-01"),
            dataTermino: new Date("2024-06-30"),
            dependencias:undefined
        }]
    },
    {
        nome: "Zephyr", 
          dataInicio: new Date("2024-06-05"),
            dataTermino: new Date("2024-06-20"),
        dependencias: undefined
    },
    {
        nome: "Aura", 
        dataInicio: new Date("2024-05-10"), 
        dataTermino: new Date("2024-09-10"), 
        dependencias: undefined
    },
    {
        nome: "Flux", 
        dataInicio: new Date("2024-01-30"), 
        dataTermino: new Date("2024-09-25"), 
        dependencias: [{
            nome: "Estrela",
            dataInicio: new Date("2024-07-01"),
            dataTermino: new Date("2024-07-31"),
            dependencias: undefined
        }]
    },
    {
        nome: "Nova", 
        dataInicio: new Date("2024-03-30"), 
        dataTermino: new Date("2024-09-15"), 
        dependencias: undefined
    },
    {
        nome: "Mira", 
        dataInicio: new Date("2024-10-20"), 
        dataTermino: new Date("2025-02-15"), 
        dependencias:[{
            nome: "Estrela",
        dataInicio: new Date("2024-07-01"),
        dataTermino: new Date("2024-07-31"),
        dependencias: undefined
        }]
    },
    {
        nome: "Plex", 
        dataInicio: new Date("2024-04-30"), 
        dataTermino: new Date("2024-05-15"), 
        dependencias: undefined
    }

    
];



export function projetoSemDependencia(projetos: DadosProjeto[]): DadosProjeto[] {
    
    const semDependencia = projetos.filter(projeto => {
        
        if (!projeto.dependencias || projeto.dependencias.length === 0) {
            return true;
        } else {
            console.log(`Projetos com dependência: O projeto ${projeto.nome} possui uma dependência: ${projeto.dependencias}`);
            return false; 
        }
    });

    
    const ordenarPorDataTermino = (projetos: DadosProjeto[]): DadosProjeto[] => {
        return projetos.slice().sort((a, b) => b.dataTermino.getTime() - a.dataTermino.getTime());
    };

    return ordenarPorDataTermino(semDependencia);
}



const resultado = projetoSemDependencia(projetos);
console.log("Projetos sem dependências e ordenados:", resultado)

