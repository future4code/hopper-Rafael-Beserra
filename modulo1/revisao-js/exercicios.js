// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
  return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
  return array.reverse()
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
  return array.sort((num1, num2) => num1 - num2)
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
  let soPar = array.filter(item => item % 2 === 0);
  return soPar
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
  let soParElevar = array.filter(item => item % 2 === 0);
  let soParElevado = soParElevar.map(item => item ** 2)
  return soParElevado
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
  let numExemplo = 0
  for (let i = 0; i <= array.length - 1; i++) {
    if (array[i] > numExemplo) {
      numExemplo = array[i]
    }
  }
  return numExemplo
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
  let retornaObjeto = {
    maiorNumero: 0,
    maiorDivisivelPorMenor: true,
    diferenca: 0,
}
if (num1 > num2) {
    retornaObjeto.maiorNumero = num1
    retornaObjeto.maiorDivisivelPorMenor = (num1 % num2 === 0)
    retornaObjeto.diferenca = num1 - num2
} else {
    retornaObjeto.maiorNumero = num2
    retornaObjeto.maiorDivisivelPorMenor = (num2 % num1 === 0)
    retornaObjeto.diferenca = num2 - num1


}
return retornaObjeto
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
  let numeroQtdPar = []
  let i = 0
  let n2 = 0
  while (i < n) {
      numeroQtdPar.push(n2)
      n2 += 2
      i++
  }
return numeroQtdPar
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
  if (ladoA === ladoB && ladoB === ladoC) {
    return "Equilátero"
} else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
    return "Isósceles"
} else {
    return "Escaleno"
}
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  let ordem = array.sort((a, b) => a-b)
  let novoArray = []
  novoArray.push(array[array.length-2])
  novoArray.push(array[1])
  return novoArray
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
  return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores}.`

  return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores[0]}, ${filme.atores[1]}, ${filme.atores[2]}, ${filme.atores[3]}.`
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
  return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores[0]}, ${filme.atores[1]}, ${filme.atores[2]}, ${filme.atores[3]}.`
  return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores.join(', ')}.`
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
  let pessoasAutorizadas = pessoas.filter((usuario, indice, array) => {
    return (usuario.idade < 60) && (usuario.idade > 14) && (usuario.altura > 1.5)

   } )
   return pessoasAutorizadas
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  let pessoasNAutorizadas = pessoas.filter((usuario, indice, array) => {
    return (usuario.idade >= 60) || (usuario.idade <= 14) || (usuario.altura < 1.5)

   } )
   return pessoasNAutorizadas
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
  contas.map((conta) => {
    let divida = conta.compras.reduce((valor1, valor2) => valor1 + valor2, 0)
    conta.saldoTotal -= divida
    conta.compras = []
})
return contas
}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  return consultas.sort((data1, data2) => {
    data1 = data1.dataDaConsulta.split("/").reverse().join()
    data2 = data2.dataDaConsulta.split("/").reverse().join()
    return data1.localeCompare(data2)
 
    })
 
 }

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
  return consultas.sort((data1, data2) => {
    data1 = data1.dataDaConsulta.split("/").reverse().join("-")
    data2 = data2.dataDaConsulta.split("/").reverse().join("-")
    new Date(data1)
    new Date(data2)
    return data1.localeCompare(data2)
    return consultas.sort((consulta1, consulta2) => {
    let datatransformada1 = consulta1.dataDaConsulta.split("/").reverse().join("-")
    let datatransformada2 = consulta2.dataDaConsulta.split("/").reverse().join("-")
 
    return datatransformada1.localeCompare(datatransformada2)
 
    })
  }