import { copyFileSync } from "fs"

const numb1 = Number(process.argv[2])
const numb2 = Number(process.argv[3])


function exercicio6 (n1: number, n2:number): void {
    const soma = numb1 + numb2
    const subtracao = numb1 - numb2
    const multiplicacao = numb1 * numb2
    let maior = 0
    if (numb1 > numb2) {maior = numb1} else {maior = numb2}
    console.log(`A soma dos números é:${soma}, a subtração é:${subtracao}, a multiplicação é:${multiplicacao} e o marior é:${maior}`)
}

exercicio6(numb1, numb2)