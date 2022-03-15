// ***********************************************************8
// Exercícios de interpretação de código
// 1)R= Ele traz as informações de cada posição mais o array por ter também o array na função

// 2)R= Traz um array com somente os ítens mapeados, neste caso os nomes.

// 3)R= Retorna todos os objetos que não contem apelido Chijo

// ******************************************************************************************************************

// 1)
const pets = [
    { nome: "Lupin", raca: "Salsicha" },
    { nome: "Polly", raca: "Lhasa Apso" },
    { nome: "Madame", raca: "Poodle" },
    { nome: "Quentinho", raca: "Salsicha" },
    { nome: "Fluffy", raca: "Poodle" },
    { nome: "Caramelo", raca: "Vira-lata" },
]

//  A)
const apenasNomeDogs = pets.map((item, index) => {
    return item.nome
})
// console.log(apenasNomeDogs)
// *****************************

// B)
const soDogSalsicha = pets.filter((item, index) => {
    return item.raca === "Salsicha"
})
// console.log(soDogSalsicha)
// *******************************************************

// C)
const donosPoodles = pets.filter((item, index, array) => {
    return item.raca === "Poodle"
})

const dogsParaMensagem = donosPoodles.map((item) => {
    return `Você ganhou um cupom de desconto de 10% para tosar o/a ${item.nome}`
})
// console.log(dogsParaMensagem)

// ********************************************************************************************************************

// 2)
const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]

 // A)
 const nomeCadaItem = produtos.map((item, index, array) => {
     return item.nome
 })
//  console.log(nomeCadaItem)
// ********************************************************************************************************************

// B)
const promocao = produtos.map((produto) => {
    const objeto = {
        nome: produto.nome,
        preco: (produto.preco * 0.95).toFixed(2)
    };
    return objeto;
});
// console.log(promocao)
// ********************************************************************************************************************

// C)
const categoriaBebidas = produtos.filter((item) => {
    return item.categoria === "Bebidas"
})
// console.log(categoriaBebidas)
// ********************************************************************************************************************

// D)
const palavraYpe = produtos.filter((item) => {
    return item.nome.includes('Ypê')}
);
// console.log(palavraYpe)
// ********************************************************************************************************************

// E)
const nomeEPreco = palavraYpe.map((letraE) => {
    return `Compre ${letraE.nome} por ${letraE.preco}`
})
// console.log(nomeEPreco)