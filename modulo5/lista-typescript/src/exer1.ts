const nome = process.argv[2]
const idade = process.argv[3]

function exerOne(nome: string, data: string) {
    const novoArrey: string[]= data.split("/")
    return (
        
        console.log(`Olá me chamo ${nome}, nasci no dia ${novoArrey[0]} do mês de ${novoArrey[1]} do ano de ${novoArrey[2]}`)
    )
}

exerOne(nome, idade)