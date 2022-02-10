// 1- R: 10 5
// 2- R: 10 10 10
// horasTrabalhadaDia, ganhoPorDia



// Exercício 1
let nome
let idade
console.log (typeof nome, typeof idade)
// undefined undefined porque não atribui valor a variavel
nome = prompt("Qual seu nome?")
idade = prompt("Qual sua idade?")
console.log (typeof nome, typeof idade)
// agora recebe string por toda a informação que é recebida no prompt ser armazenada como string.
console.log ("Olá", nome , "você tem", idade, "anos")*/



// Exercício 2
let roupa
let agua
let banho
roupa = prompt("Você está usando uma roupa azul hoje?")
agua = prompt("Você bebeu água hoje?")
banho = prompt("Você tomou banho hoje?")
let roupa1 = roupa
let agua1 = agua
let banho1 = banho
console.log("Você está usando uma roupa azul hoje?" , roupa1)
console.log("Você está usando uma roupa azul hoje?" , agua1)
console.log("Você tomou banho hoje?" , banho1)*/



// Exercício 3
let a = 10
let b = 25

c = a
a = b
b = c

// Depois de trocados, teremos o seguinte resultado:
console.log("O novo valor de a é", a) // O novo valor de a é 25
console.log("O novo valor de b é", b) // O novo valor de b é 10



// Desafio *******************************************
let soma
let multiplicacao

let info1 = Number(prompt("Digite o primeiro número da operação:"))
let info2 = Number(prompt("Digite o sengundo número da operação:"))


soma = info1 + info2
multiplicacao = info1 * info2

console.log("O primeiro número somado ao segundo número resulta em:", soma)
console.log("O primeiro número multiplicado pelo segundo número resulta em:", multiplicacao)


