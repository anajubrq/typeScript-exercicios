/*Contexto: Você está desenvolvendo um aplicativo bancário que registra transações financeiras. Cada transação é representada por um objeto com propriedades como valor, tipo (entrada ou saída), e categoria.
Tarefa: Crie uma função que agrupe as transações por categoria e calcule o total de entradas e saídas de cada categoria, retornando um objeto com essas informações.*/
export interface ObejetosTransacao {
    valor:number,
    tipo:string,
    categoria:string
}

const transacao: ObejetosTransacao[] = [{
    valor: 140,
    tipo: "entrada",
    categoria: "Pix"
},
{
    valor: 330,
    tipo: "entrada",
    categoria: "Ted"
},
{
    valor: 50,
    tipo: "saida",
    categoria: "Pix"
},
{
    valor: 230,
    tipo: "entrada",
    categoria: "Doc"
}
]



function transacoesCategoria (transacao:ObejetosTransacao[]){
    
}