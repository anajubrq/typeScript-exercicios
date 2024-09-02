/*Contexto: Em uma plataforma de e-commerce, cada pedido é representado por um objeto que contém informações sobre o comprador, o valor total do pedido, e a data de criação.
Tarefa: Crie uma função que receba um array de pedidos e retorne um novo array contendo apenas o nome do comprador e o valor total de cada pedido.*/



interface Dados {
    comprador: string;
    valorTotal: number;
    data: Date;
}

const pedidos:Dados[]=[
    {comprador:'Ana',valorTotal:2070, data: new Date("2024-09-15")},
    {comprador:'Ana',valorTotal:2070, data: new Date("2024-02-5")},
    {comprador:'Ana',valorTotal:2070, data: new Date("2022-05-19")},
    {comprador:'Ana',valorTotal:2070, data: new Date("2024-07-13")},
    {comprador:'Ana',valorTotal:2070, data: new Date("2024-04-1")},
    {comprador:'Ana',valorTotal:2070, data: new Date("2024-01-08")}
]


function arrayPedidos(pedidos: Dados[]) {
    return pedidos.map(pedido => ({
        comprador: pedido.comprador,
        valorTotal: pedido.valorTotal
    }));
}

const novoArray = arrayPedidos(pedidos);

console.log(novoArray);



