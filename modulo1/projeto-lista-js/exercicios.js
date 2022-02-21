// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
let altura = Number(prompt("Qual a altura"))
let largura = Number(prompt("Qual a largura"))
let area = altura*largura
console.log(area)

}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  let anoAtual = Number(prompt("Digite o ano atual"))
  let anoDeNascimento = Number(prompt("Digite seu ano de nascimento"))
  let calculoIdade = anoAtual - anoDeNascimento
 console.log(calculoIdade)


}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
return peso / (altura * altura)

}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
let nome = prompt("Olá, qual seu nome?")
let idade = Number(prompt("Qual sua idade?"))
let email = prompt("Qual seu email?")
let resposta = `Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`
console.log(resposta)
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
let cor1 = prompt("Qua sua cor favorita")
let cor2 = prompt("Qua sua segunda cor favorita")
let cor3 = prompt("Qua sua terceira cor favorita")
let listaCorFavorita = [cor1, cor2, cor3]
console.log(listaCorFavorita)


}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui

return string.toUpperCase()


}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
return custo / valorIngresso

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui

// let string1QntCaracter = string1.length
// let ststring2QntCaracter = string2.length
// return string1QntCaracter === ststring2QntCaracter
return string1.length === string2.length

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
return array[0]
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  // let ultimoDoArray = array.pop()
return ultimoDoArray = array.pop()
 
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  
  const auxiliar = array[0]

  array[0] = array[array.length - 1]
  array[array.length - 1] = auxiliar
return array
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
//   let novaStringminuscula1 = string1.toLowerCase()
//   let novaStringminuscula2 = string2.toLowerCase()
// return novaStringminuscula1 === novaStringminuscula2
return string1.toLowerCase() === string2.toLowerCase()

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
  let anoAtual = Number(prompt("Qual o ano atual?"))
  let anosNascimento = Number(prompt("Digite um ano de nascimento"))
  let anoCerteiraMotorista = Number(prompt("Qual o ano de emissão da carteira de identidade?"))
let idadeCompleta = anoAtual - anosNascimento
let idadeCarteiraIde = anoAtual - anoCerteiraMotorista
if((idadeCompleta <= 20) && (idadeCarteiraIde >= 5) ) { console.log(true)}else { 
  if(((idadeCompleta > 20) && (idadeCompleta <= 50)) && (idadeCarteiraIde >= 10)) { console.log(true)}else{
    if((idadeCompleta > 50) && (idadeCarteiraIde >= 15)){console.log(true)}else{console.log(false)}
  } }

  
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
  return (ano % 400 === 0) || (ano % 4 === 0 && ano % 100 != 0)
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
let idade = prompt("Você tem mais de 18 anos")
let ensinoMedio = prompt("tem ensino médio completo?")
let disponibilidadeHorário = prompt("tem disponibilidade de horários?")
let idede1 = idade.includes("sim")
let ensinoMedio1 = ensinoMedio.includes("sim")

let disponibilidadeHorário1 = disponibilidadeHorário.includes("sim")
let idadeEnsino = idede1 && ensinoMedio1
console.log(idadeEnsino && disponibilidadeHorário1)
// idadeEnsino && ensinoMedio1
}