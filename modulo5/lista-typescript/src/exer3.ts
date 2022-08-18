type film = {
    nome: string,
    ano: number,
    genero: string,
    pontuacao?: number
}

enum GENERO {
	ACAO="ação",
	DRAMA="drama",
	COMEDIA="comédia",
	ROMANCE="romance",
	TERROR="terror"
}

const genero = process.argv[4]

const filme: film[] = [{
    nome: process.argv[2],
    ano: Number(process.argv[3]),
    genero: GENERO.genero,
    pontuacao: Number(process.argv[5])
}]

function catalog(filme: film[]) {

    // if (filme.genero === ) {

    // }
    // filme.map((fil) => {
        
    // })

    console.log(filme)
}
catalog(filme)

// nome: string, ano: number, genero: string, pontuacao: number