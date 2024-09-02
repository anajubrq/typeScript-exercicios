/*Contexto: Um sistema de agendamento de eventos precisa gerenciar diferentes tipos de eventos, como reuniões, workshops e conferências. Cada evento é representado por um objeto contendo título, data, tipo, e local.
Tarefa: Crie uma função que receba um array de eventos e permita filtrar os eventos por tipo e por data. Em seguida, agrupe os eventos por local e retorne um objeto onde as chaves são os locais e os valores são arrays de eventos que ocorrem nesse local.*/
interface DadosEventos {
    titulo: string;
    data: Date;
    tipo: string;
    local: string;
}

const eventos: DadosEventos[] = [
    { titulo: "Festa de Lançamento", data: new Date("2024-10-01"), tipo: "Lançamento", local: "Avenida Paulista" },
    { titulo: "Comemoração 30 anos", data: new Date("2024-09-15"), tipo: "Aniversário", local: "Rua Ceará" },
    { titulo: "Reunião Anual", data: new Date("2024-11-20"), tipo: "Conferência", local: "Centro de Convenções" },
    { titulo: "Jantar de Gala", data: new Date("2024-12-05"), tipo: "Gala", local: "Hotel Luxor" },
    { titulo: "Workshop de Inovação", data: new Date("2024-08-28"), tipo: "Workshop", local: "Universidade Federal" }
];

