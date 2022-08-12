// 1)A)
// const minhaString: string = 10
// R: apresenta erro por ser uma variável que só aceita numero.

// 1)B)
type numbAndStri = number | string | undefined
const meuNumero: numbAndStri = undefined

// 1)C)
enum CORESARCO {
    VERMLELHO = "vermelho",
    LARANJA = "laranja",
    AMARELA = "amarela",
    VERDE = "verde",
    AZUL = "azul",
    AZULESCURO = "azul-escuro",
    VIOLETA = "violeta"
}

type pessoa = {
    nome: string,
    idade: number,
    corFavorita: CORESARCO
}


const objectOne: pessoa = {
    nome: "Rafael",
    idade: 31,
    corFavorita: CORESARCO.VERMLELHO
}

const objectTwo: pessoa = {
    nome: "sadsa",
    idade: 20,
    corFavorita: CORESARCO.VERMLELHO
}

const objectthree: pessoa = {
    nome: "Rafael",
    idade: 31,
    corFavorita: CORESARCO.VERMLELHO
}
