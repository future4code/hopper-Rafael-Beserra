// Exercícios de interpretação de código:

// 1)
// "Matheus Nachtergaele"
// Virginia Cavendish
// canal: "Globo", horario: "14h"
// *******************************************************

// 2)
// nome: "Juca", 
// 	idade: 3, 
// 	raca: "SRD"

//     nome: "Juba", 
// 	idade: 3, 
// 	raca: "SRD"

//     nome: "Jubo", 
// 	idade: 3, 
// 	raca: "SRD"

// B)
// A sintaxe faz copiar o que existe dentro o objeto citado
// ********************************************************************************
// 3)A)
// false
// indefinido

// B)
// False é o que esta guardado em backender e indefinido por não existir altura dentro do objeto pessoa
// ***************************************************************************************************************


// Exercícios de escrita de código
// 1)
// A)
let pessoa1 = {
    nome: "Amanda", 
    apelidos: ["Chata", "Fechamento", "Mandi"]
}
    console.log(`Eu sou ${pessoa1.nome}, mas pode me chamar de:${pessoa1.apelidos[0]}, ${pessoa1.apelidos[1]} ou ${pessoa1.apelidos[2]}`)

    // B)
    let pessoaNovoOperador1 = {...pessoa1, apelidos: ["Top", "Gente boa", "Pão de queijo"]
    }
    console.log(`Eu sou ${pessoaNovoOperador1.nome}, mas pode me chamar de:${pessoaNovoOperador1.apelidos[0]}, ${pessoaNovoOperador1.apelidos[1]} ou ${pessoaNovoOperador1.apelidos[2]}`)
    // *************************************************************************************************************

// 2)

let funcaoQuest2 = (objeto,propriedade ) => {
    return objeto[propriedade]
}

let objetoQuest2 = {
    nome: "Rafael",
    idade: 27,
    profissao: "técnico"
}
let objetoQuest21 = {
    nome: "Luiz",
    idade: 25,
  profissao: "rico",
}

console.log([funcaoQuest2(objetoQuest2, "nome"),objetoQuest2.nome.length, funcaoQuest2(objetoQuest2, "idade"), funcaoQuest2(objetoQuest2, "profissao"), objetoQuest2.profissao.length] )
console.log([funcaoQuest2(objetoQuest21, "nome"),objetoQuest21.nome.length, funcaoQuest2(objetoQuest21, "idade"), funcaoQuest2(objetoQuest21, "profissao"), objetoQuest21.profissao.length] )
// *****************************************************************************************************************************************************************************************************

// 3)
let carrinho = []

let fruta0 = {
    nome: "Manga",
    disponibilidade: true,
}

let fruta1 = {
    nome: "Banana",
    disponibilidade: false,
}

let fruta2 = {
    nome: "Goiaba",
    disponibilidade: true,
}

let frutas = frutaPadrao => {
    carrinho.push(frutaPadrao)
}

frutas(fruta0)
frutas(fruta1)
frutas(fruta2)

console.log(carrinho)

// *********************************************************************
// ou 
// frutas ([fruta0, fruta1, fruta2])
