// 1)A) Tudo que rodamos com NPM já é como node, Node Package Manager
const nome = process.argv[2]
const idade = Number(process.argv[3])
const idadeSete = (idade + 7)

// 1)B)
// console.log(`Olá, ${nome}! Você tem ${idade} anos.`)

// 1)C)
// console.log(`Olá, ${nome}! Você tem ${idade} anos. Em sete anos você terá ${idadeSete}`)

// Desafio
if (nome && idade) {console.log(`Olá, ${nome}! Você tem ${idade} anos. Em sete anos você terá ${idadeSete}`)}
 else {console.log("Esperava 2 parâmetros só recebi um.")}