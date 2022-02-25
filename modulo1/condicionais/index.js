// Exercícios de interpretação de código
// 1
// A)
// É para saber se o número difitado é par.

// B)
// Números pares

// C)
// Números ímpares

// 2)
// A) Serve para dizer o preço dos itens digitados

// B)
// 2.25

// C)
// A) Para indicar o preço da fruta difitadada

// B) O preço da fruta Maçã é R$ 2.25

// C) Live reload enabled. e O preço da fruta  Pêra  é  R$  5
// *************************************************************************************

// 3)
// A) pedindo um número ao usuário

// B) 10 = Esse número passou no teste
// -10 erro

// C) Sim, se o número for menor que 0 não existe Else para ele.
// *************************************************************************************************

// Exercícios de escrita de código
// 1)
let idadeExercicio1 = Number(prompt("Qual sua idade?"))
if (idadeExercicio1 >= 18) {
    console.log("Você pode dirigir")
} else {
    console.log("Voce não pode dirigir")
}
// ****************************************

// 2)
let turno = prompt("Qual seu turno, M (matutino) ou V (Vespertino) ou N (Noturno)?")
    if (turno === "M") {
        console.log("Bom Dia!")
    } else {
        if (turno === "V") {
            console.log("Boa Tarde!")
        } else {
            if (turno === "N"){
                console.log("Boa Noite!")
            } else {
                console.log("Erro")
            }
            }
    }
// ****************************************************************************************

// 3)
switch (turno){
    case 'M':
        console.log("Bom Dia!")
        break
        case 'V':
            console.log('Boa Tarde!')
            break
            case 'N':
                console.log('Boa Noite!')
                break
                default:
                    console.log('Erro')
                    break
// }
// *****************************************************************************

// 4)
let filmeGenero = prompt("Qual o gênero do filme?")
let valorDoIngresso = Number(prompt("Qual o valor do ingresso"))

if ((filmeGenero === "fantasia") && (valorDoIngresso < 15)) {
    console.log("Bom filme!")
}   else { console.log("Escolha outro filme :(")}
// **************************************************************************************

// Desafios
// 1)
let filmeGenero = prompt("Qual o gênero do filme?")
let valorDoIngresso = Number(prompt("Qual o valor do ingresso"))
let lanchinho = prompt("Qual lanche você vai comprar?")
if ((filmeGenero === "fantasia") && (valorDoIngresso < 15)) {
    console.log("Bom filme!")
    console.log(`Aproveite o seu(a) ${lanchinho}`)
}   else { console.log("Escolha outro filme :(")}
// ************************************************************************************************

// 2)
let nomeCompleto = prompt("Nome completo")
let tipoDeJogo = prompt("Tipo de jogo, IN ou DO?")
if (tipoDeJogo === "IN"){
    tipoDeJogo = "Internacional"
}   else { tipoDeJogo = "Nacional"
}

let etapaDoJogo = prompt("Etapa do jogo SF, DT ou FI")
if (etapaDoJogo === "SF"){etapaDoJogo = "Semi-fianl" }
    else {
        if (etapaDoJogo === "DT"){etapaDoJogo = "Decisão terceiro lugar"}
        else {
            if (etapaDoJogo === "FI"){etapaDoJogo = "Final"}
            else{console.log("erro")}
        }
    }

let categoria = Number(prompt("Categoria, 1, 2, 3 ou 4?"))
let quantidadeDeIngressos = Number(prompt("Quantidade de ingressos?"))


let valorIngressoUnitario

if  ((etapaDoJogo === "Semi-fianl") && (categoria === 1)){ valorIngressoUnitario = 1.320,20;}
    else {
        if ((etapaDoJogo === "Semi-fianl") && (categoria === 2)) {valorIngressoUnitario = 880,00;}
        else{
        if ((etapaDoJogo === "Semi-fianl") && (categoria === 3)) { valorIngressoUnitario = 550,00;}
            else {
                if ((etapaDoJogo === "Semi-fianl") && (categoria === 4)){valorIngressoUnitario = 220,00;}
                else{
                    if ((etapaDoJogo === "Decisão terceiro lugar") && (categoria === 1)){ valorIngressoUnitario = 660,00;}
                    else{
                        if ((etapaDoJogo === "Decisão terceiro lugar") && (categoria === 2)){ valorIngressoUnitario = 440,00;}
                        else {
                            if ((etapaDoJogo === "Decisão terceiro lugar") && (categoria === 3)){ valorIngressoUnitario = 330,00;}
                            else {
                                if ((etapaDoJogo === "Decisão terceiro lugar") && (categoria === 4)){ valorIngressoUnitario = 170,00;}
                                else {
                                    if ((etapaDoJogo === "Final") && (categoria === 1)){ valorIngressoUnitario = 1.980;}
                                    else {
                                        if ((etapaDoJogo === "Final") && (categoria === 2)){ valorIngressoUnitario = 1.320;}
                                        else{
                                            if ((etapaDoJogo === "Final") && (categoria === 3)){ valorIngressoUnitario = 880;}
                                            else{
                                                if((etapaDoJogo === "Final") && (categoria === 4)){ valorIngressoUnitario = 330;}
                                                else{console.log("Erro")}
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    let valorIngressoCompraNacional = valorIngressoUnitario * quantidadeDeIngressos
    let valorIngressoUnitarioDolar = valorIngressoUnitario * 4.10
    let valorIngressoTotalDolar = valorIngressoUnitarioDolar * quantidadeDeIngressos



if (tipoDeJogo === "Nacional") {
console.log(`
---Dados da compra--- 
Nome do cliente: ${nomeCompleto}
Tipo do jogo: ${tipoDeJogo}
Etapa do jogo: ${etapaDoJogo}
Categoria: ${categoria}
quantidade de ingressos: ${quantidadeDeIngressos}
---Valores--- 
Valor do ingresso: R$ ${valorIngressoUnitario}
Valor total: R$ ${valorIngressoCompraNacional}
`)
}else {
console.log(`
---Dados da compra--- 
Nome do cliente: ${nomeCompleto}
Tipo do jogo: ${tipoDeJogo}
Etapa do jogo: ${etapaDoJogo}
Categoria: ${categoria}
quantidade de ingressos: ${quantidadeDeIngressos}
---Valores--- 
Valor do ingresso: U$ ${valorIngressoUnitarioDolar}
Valor total: U$ ${valorIngressoTotalDolar}
`)
        }