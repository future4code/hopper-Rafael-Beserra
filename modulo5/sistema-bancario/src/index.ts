import express, {Request, Response} from 'express'
import cors from 'cors'
import { contas, usersTipe } from './data'
import { dataAtual } from './utilites/funcoes'
import { extrato } from './data'
const app = express()
app.use(express.json())
app.use(cors())

app.get("/contas/admin",(req: Request, res: Response) => {
    try {
        res.status(200).send(contas)
    } catch (error) {
        
    }
})

// ******************************************************************************************

app.post("/contas/criar",(req: Request, res: Response) => {
    let statusCode = 500
    try {
        const userName = req.headers.nome
        const userCpf = req.headers.cpf
        const userNasc = req.headers.datadenascimento
        if(!userName || !userCpf || !userNasc){
            statusCode = 401
            throw new Error("Necessário informar todos os dados");
        }

        const newUserVeri = req.body.id

        const userExistente = contas.find(cli => cli.id === newUserVeri)
        if(userExistente){
            statusCode = 409
            throw new Error("Usuário(a) já possui conta conosco");
        }
        const {id, cpf, nascimento} = req.body
        const newUser: usersTipe = 
            {
                id,
                cpf,
                nascimento,
                saldo:0,
                extrato:[
                    {
                        valor:0,
                        descrição:"Saldo inicial",
                        dataPagamento:dataAtual()
                    }
                ]
            }
        
        contas.push(newUser)

        statusCode = 201
        return res.status(statusCode).send("Conta criada com sucesso")
        

    } catch (error: any) {
        statusCode = 404
        return res.status(statusCode).send({ message: error.message, status: statusCode })
    }
})

// ******************************************************************************************

app.get("/contas/saldo",(req: Request, res: Response) => {
    let statusCode = 500
    try {
        const userName = req.query.nome
        const userCpf = Number(req.query.cpf)
        if(!userName || !userCpf){
            statusCode = 401
            throw new Error("Necessário informar todos os dados");
        }

        const userExistente = contas.find(cli => cli.id === userName)
        if(!userExistente){
            statusCode = 409
            throw new Error("Usuário(a) não encontrado");
        }

        statusCode = 201
        res.status(201).send(userExistente.saldo)

    } catch (error: any) {
        statusCode = 404
        return res.status(statusCode).send({ message: error.message, status: statusCode })
    }
})

// ******************************************************************************************

app.put("/contas/addsaldo/:cpf",(req: Request, res: Response) => {
    let statusCode = 500
    try {
        const novoSaldo = Number(req.body.novoSaldo)
        const userCpf = Number(req.params.cpf)

        if(!novoSaldo){
            statusCode = 409
            throw new Error("informar valor que será adicionado");
        }

        if(!userCpf){
            statusCode = 401
            throw new Error("Necessário informar todos os dados");
        }

        const userExistente = contas.find(cli => cli.cpf === userCpf)
        if(!userExistente){
            statusCode = 409
            throw new Error("Usuário(a) não encontrado");
        }

        userExistente.saldo = userExistente.saldo + novoSaldo
        
        const transacao = {
            valor:novoSaldo,
            descrição:"Depósito",
            dataPagamento:dataAtual()
        }

        userExistente.extrato.push(transacao)

        statusCode = 201
        return res.status(statusCode).send("Saldo adicionado com sucesso")

    } catch (error: any) {
        statusCode = 404
        return res.status(statusCode).send({ message: error.message, status: statusCode })
    }
})

// ******************************************************************************************






app.listen(3003, () => {
 console.log("Server is running in http://localhost:3003");
});
