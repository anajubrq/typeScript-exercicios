import { filterProductsInStock, Produtos } from './task01';

// O 'describe' agrupa testes relacionados. Neste caso, todos os testes para a função 'produtosEmEstoque'.
describe('produtosEmEstoque', () => {
  // Cada 'it' representa um teste individual
  it('deve retornar apenas produtos em estoque', () => {
    // Arrange: Preparamos os dados de teste
    const testProdutos: Produtos[] = [
      { nome: "café", preco: 4.50, estoque: true },
      { nome: "açúcar", preco: 8, estoque: true },
      { nome: "leite", preco: 6, estoque: false },
      { nome: "sal", preco: 1.50, estoque: true }
    ];

    const result = filterProductsInStock(testProdutos);

    // Assert: Verificamos se o resultado é o esperado
    // Esperamos que o array resultante tenha 3 itens (os que estão em estoque)
    expect(result).toHaveLength(3);
    // Verificamos se o array resultante contém exatamente os produtos esperados
    expect(result).toEqual([
      { nome: "café", preco: 4.50, estoque: true },
      { nome: "açúcar", preco: 8, estoque: true },
      { nome: "sal", preco: 1.50, estoque: true }
    ]);
  });

  it('deve retornar um array vazio quando nenhum produto está em estoque', () => {
    // Arrange: Criamos um array de teste onde nenhum produto está em estoque
    const testProdutos: Produtos[] = [
      { nome: "item1", preco: 10, estoque: false },
      { nome: "item2", preco: 20, estoque: false }
    ];

    // Act: Executamos a função com nossos dados de teste
    const result = filterProductsInStock(testProdutos);

    // Assert: Verificamos se o resultado é um array vazio
    expect(result).toHaveLength(0);
    expect(result).toEqual([]);
  });

  it('deve lidar com um array de entrada vazio', () => {
    // Arrange: Criamos um array vazio para testar
    const testProdutos: Produtos[] = [];

    // Act: Executamos a função com o array vazio
    const result = filterProductsInStock(testProdutos);

    // Assert: Verificamos se o resultado é um array vazio
    expect(result).toHaveLength(0);
    expect(result).toEqual([]);
  });
});