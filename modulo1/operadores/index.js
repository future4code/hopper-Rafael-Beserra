// R1: false
// R2: false
// R3: true
// R4: Tem que converter a resposta em número
// ***************************************************

// Exercício1:
let idadeUsuarioEx1 = Number(prompt ("Olá, Qualsua idade?"))
let idadeMelhorAmigo = Number(prompt ("Qaul a idade da sua melhor amiga"))

let idadeMaior = idadeUsuarioEx1 > idadeMelhorAmigo
console.log("Sua idade é maior do que a do seu melhor amigo?", idadeMaior)

let diferencaIdade = idadeUsuarioEx1 - idadeMelhorAmigo

console.log("Adiferença de idade entre vocês é:", diferencaIdade)
// ********************************************************************

// Exercício2:
let numeroPar = Number(prompt("Olá, digite um número par"))
let restoDivisao = numeroPar % 2
console.log(restoDivisao)
Toda divisão de um número par por 2 é igual a 0
Toda divisão de um ímpar par por 2 é igual a 1
// **************************************************************************

// Exercício3:
let idadeEmAno = Number(prompt("Olá, qual sua idade em anos?"))
let idadeEmMeses = idadeEmAno * 12
let idadeEmDias = idadeEmAno * 365
let idadeEmHoras = idadeEmAno * (24 * 365)

console.log("Sua idade em meses é:", idadeEmMeses)
console.log("Sua idade em dias é:", idadeEmDias)
console.log("Sua idade em horas é:", idadeEmHoras)
// *****************************************************************************

// Exercício4:
let numero1 = Number(prompt("Digite um número:"))
let numero2 = Number(prompt("Digite mais um número:"))

let exe1 = numero1 > numero2
let exe2 = numero1 === numero2
let exe3 = numero1 % numero2
let exe3Final = exe3 === 0
let exe4 = numero2 % numero1
let exer4Final = exe4 === 0
console.log("O primeiro numero é maior que segundo?", exe1)
console.log("O primeiro numero é igual ao segundo?", exe2)
console.log("O primeiro numero é divisível pelo segundo?", exe3Final)
console.log("O segundo numero é divisível pelo primeiro?", exer4Final)
// ******************************************************************************

// Desafio1:
let fahreInfoUsu = Number(prompt("Digite o valor em Fahrenheit para tranformar em Kelvin"))
let fahreForKelvin = (fahreInfoUsu - 32)*(5/9) + 273.15
console.log("O valor em Kelvin", fahreForKelvin,"K")

let celciusInfoUsu = Number(prompt("Digite o valor em Celcius para tranformar em Fahrenheit"))
let celForFahre = (celciusInfoUsu)*(9/5) + 32
console.log("O valor do Celsius em Fahrenheit", celForFahre,"F")

let valorEmCelc = Number(prompt("Digite o valor em Celsius para transformar em Fahrenheit e Celsius"))
let celForFahreC = (valorEmCelc)*(9/5) + 32
let celForKelC = (celForFahreC - 32)*(5/9) + 273.15
console.log("O valor em Fahrenheit é",celForFahreC,"F e o valor em Kelvin é",celForKelC,"K")
// *********************************************************************************************************


// Desafio2
let quiloCliente = Number(prompt("Olá, digite quantos quilowatts foram consumidos:"))
let valSerPago = quiloCliente * 0.05
console.log("Valor à ser pago é", valSerPago)
let valSerPagoDes15 = valSerPago * 0.85
console.log("Valor à ser pago com 15% de desconto é:",valSerPagoDes15)
// ***************************************************************************************************************


// Desafio3(A)
let valLetraA = 80
let lbForKilo = valLetraA / 2.2046
console.log(valLetraA,"lb equivalente a",lbForKilo,"Kg")



// Desafio3(B)
let valLetraB = 10.5
let ozForKilo = valLetraB * 0.0283495231
console.log(valLetraB,"oz equivalem a",ozForKilo,"Kg")


// Desafio3(C)
let valLetraC = 10.5
let milForMetro = valLetraC * 1609,34
console.log(valLetraC,"mi equivalem a",milForMetro,"m")


// Desafio3(D)
let valLetraD = 50
let ftForMetro = valLetraD * 0,3048
console.log(valLetraD,"ft equivalem a", tForMetro,"m")


// Desafio3(E)
let valLetraE
let galForLitro = valLetraE * 3.785
console.log(valLetraE,"gal equivalem a", galForLitro,"L")


// Desafio3(F)
let valLetraF
let xicForLitro = valLetraF * 0.24
console.log(valLetraF,"xic equivalem a",xicForLitro,"L")


// Desafio3(G)
valLetraF = Number(prompt("Olá, digite a quantidade de xícaras para converter em litro:"))
valLetraE = Number(prompt("Olá, digite a quantidade de galões para converter em litro:"))