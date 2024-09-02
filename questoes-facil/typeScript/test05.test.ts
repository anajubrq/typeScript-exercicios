import {arrayPedidos,Dados } from './task05';

describe('Retornar apenas o nome do comprador e o total do pedido',()=>{
    it('Deve retornar apenas o nome do comprador e o valor total da compra ',()=>{
        const pedidos:Dados[]=[
            { comprador: 'Ana', valorTotal: 2070, data: new Date("2024-09-15") },
            { comprador: 'Bia', valorTotal: 140, data: new Date("2024-02-5") },
            { comprador: 'Adriana', valorTotal: 98, data: new Date("2022-05-19") },
            { comprador: 'João', valorTotal: 308, data: new Date("2024-07-13") },
            { comprador: 'Carla', valorTotal: 176, data: new Date("2024-04-1") },
            { comprador: 'Ricardo', valorTotal: 875, data: new Date("2024-01-08") }
        ]
        
        const resultadoEsperado = [
            { comprador: 'Ana', valorTotal: 2070 },
            { comprador: 'Bia', valorTotal:140 },
            { comprador: 'Adriana', valorTotal: 98 },
            { comprador: 'João', valorTotal: 308 },
            { comprador: 'Carla', valorTotal: 176 },
            { comprador: 'Ricardo', valorTotal: 875}
        ];

        const novoArray = arrayPedidos(pedidos);
        expect(novoArray).toEqual(resultadoEsperado);  
      })

      it('deve retornar um array vazio quando não tiver nenhum comprador', () => {
        
        const pedidos: Dados[]= [
        ];


    const novoArray = arrayPedidos(pedidos);
    expect(novoArray).toHaveLength(0);
    expect(novoArray).toEqual([]);
})

})