// Exercícios de interpretação de código
// 1) R= 10 (soma 1+2+3+4)

// 2)A) R= 18, 19, 21, 23, 25, 27, 30 (Listado os números maiores que 18)
// 2)B) R= Não pode ser feito.

// 3) como é digitado 4 e somado 1 e o zero não acrescenta nada aparece o senguinte:
// *
// **
// ***
// ****

// *************************************************************************************************
// Exercícios de escrita de código

// 1)

// let quantosBichos = Number(prompt("Quantos bichinhos de estimação você tem?"))
// let nomeBichos = []
// if (quantosBichos === 0) {
//     console.log("Que pena! Você pode adotar um pet!")
// } else {
//     for (let i = 0; i <= quantosBichos - 1; i++) {
//         let bichosIndividual = prompt("Digite o nome do pet")
//         nomeBichos[i] = bichosIndividual
//     };
//     console.log(nomeBichos)
// }
// ************************************************************************************************************

// 2)

let arrayOriginal = [10, 20, 35, 30, 40];
let tamanhoDoArray = arrayOriginal.length - 1
let novoArray = []
let novoArrayString = []
// A)
// function funcaoLetraA(arrayA) {
//     for (let i = 0; i <= tamanhoDoArray; i++) {
//         console.log(arrayOriginal[i])
//     }
// }
// funcaoLetraA(arrayOriginal)
// *************************************************

// B)
// function funcaoLetraB(arrayB) {
//     for (let i = 0; i <= tamanhoDoArray; i++) {
//         console.log(arrayOriginal[i] / 10)
//     }
// }
// funcaoLetraB(arrayOriginal)
// ***************************************************************

// C)
// function funcaoLetraC(arrayC) {
//     for (let i = 0; i <= tamanhoDoArray; i++) {
//         if (arrayOriginal[i] % 2 === 0) {
//             novoArray[i] = arrayOriginal[i]
//         }
//     }
//     console.log(novoArray)
// }
// funcaoLetraC(arrayOriginal)
// ***************************************************************************

// D)
// function funcaoLetraD(arrayD) {
//     for (let i = 0; i <= tamanhoDoArray; i++) {
//         novoArrayString[i] = `O elemento do índex ${i} é: ${arrayOriginal[i]}`
//     }
//     console.log(novoArrayString)
// }
// funcaoLetraD(arrayOriginal)
// **********************************************************************************

// E)

// function pegarMenorEMaiorNum(array) {
//     let maiorNumero = 0
//     let menorNumero = Infinity
//     for (let numero of array) {
//         if (numero > maiorNumero) {
//             maiorNumero = numero
//         }
//         if (numero < menorNumero) {
//             menorNumero = numero
//         }
//     }
//     console.log(`Meu maior número é ${maiorNumero} e o meu menor número é ${menorNumero}`)
// }
// let arreyTeste = [10, 20, 35, 30, 40, 50]
// pegarMenorEMaiorNum(arreyTeste)