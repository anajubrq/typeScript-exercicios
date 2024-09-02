import {resumo,DadosCarrinho } from './task06';

describe('resumo',()=>{
    it('retorne um objeto contendo o total de itens, o valor total do carrinho, e um resumo de categorias com a quantidade de itens em cada uma',()=>{
        
        
  const carrinho:DadosCarrinho[]= [
    { nome: 'Tênis', preco: 150, quantidade: 2, categoria: 'Calçados' },
    { nome: 'Camisa', preco: 50, quantidade: 3, categoria: 'Roupas' },
    { nome: 'Boné', preco: 25, quantidade: 1, categoria: 'Acessórios' }
]

   const result = resumo(carrinho)

   expect(result).toEqual([
    {
        totalItems: 6,
        valorTotal: 475,
        resumoCategorias: { 'Calçados': 2, Roupas: 3, 'Acessórios': 1 }
      }
   ]);



    })

    it('Caso o carrinho seja enviado sem nada',()=>{
        const carrinho:DadosCarrinho[] = []
        const result = resumo(carrinho)
        expect(result).toEqual([]);
    })
})