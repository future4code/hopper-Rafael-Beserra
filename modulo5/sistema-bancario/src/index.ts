import express, {Request, Response} from 'express'
import cors from 'cors'
import { contas, usersTipe } from './data'
import { dataAtual } from './utilites/funcoes'
import { extrato } from './data'
const app = express()
app.use(express.json())
app.use(cors())

// ******************************************************************************************

app.get("/contas/admin",(req: Request, res: Response) => {
    try {
        res.status(200).send(contas)
    } catch (error) {
        
    }
})

// ******************************************************************************************
// Conta 1
// {
//     "id":"rafael conta 1",
//     "cpf":12345678900,
//     "nascimento":"19/08/1995"
// }

// Conta 2
// {
//     "id":"rafael conta 2",
//     "cpf":12345678911,
//     "nascimento":"19/08/1995"
// }
app.post("/contas/criar",(req: Request, res: Response) => {
    let statusCode = 500
    try {
        const {id, cpf, nascimento} = req.body

        if(!id || !cpf || !nascimento){
            statusCode=422
            throw new Error("necessãrio informar todos os dados solicitados");
        }

        const userExistente = contas.find(cli => cli.id === id)
        
        if(userExistente){
            statusCode = 409
            throw new Error("Usuário(a) já possui conta conosco");
        }

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
        let saldoPesquisado = `Seu saldo atual é ${userExistente.saldo}`
        
        return res.status(201).send(saldoPesquisado)
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

app.put("/contas/pagarboleto",(req: Request, res: Response) => {
    let statusCode = 500
    try {
        const userId = req.query.id
        let {valor, descrição, dataPagamento} = req.body

        if(!userId){
            statusCode=422
            throw new Error("Informar o usuário é obrigatório");
        }

        if(!valor || !descrição){
            statusCode=422
            throw new Error("Obrigatório informar valor e descrição");
        }

        if(typeof dataPagamento === 'undefined'){
            dataPagamento = dataAtual()
        }

        const userExistente = contas.find(cli => cli.id === userId)
        if(!userExistente){
            statusCode = 409
            throw new Error("Usuário(a) não encontrado");
        }

        if(valor > userExistente.saldo ){
            statusCode=422
            throw new Error("Conta não possui saldo suficiente para pagamento");
        }
        
        if (dataPagamento !== dataAtual()){
            const transacao = {
                valor,
                descrição,
                dataPagamento:`Pagamento agendado para ${dataPagamento}`
            }
            userExistente.extrato.push(transacao)
            res.status(statusCode).send("Pagamento agendado com sucesso")
        } else {
            if (dataPagamento === dataAtual()){
                const transacao = {
                    valor,
                    descrição,
                    dataPagamento,
                }
                userExistente.saldo=userExistente.saldo - valor
                userExistente.extrato.push(transacao)
                res.status(statusCode).send("Pagamento realizado com sucesso")
            } 
        }

        statusCode = 201
        return res.status(statusCode).send("Boleto pago com sucesso")
    } catch (error: any) {
        statusCode = 404
        return res.status(statusCode).send({ message: error.message, status: statusCode })
    }
})

// ******************************************************************************************

app.put("/contas/transferencia", (req: Request, res: Response) => {
    let statusCode = 500
    try {
        const userId = req.query.id
        const userCpf = Number(req.query.cpf)
        const {idRecebedor, cpfRecebedor, valorDepositado} = req.body

        if(!userId || !userCpf){
            statusCode = 422
            throw new Error("Dados do usuário são obrigatórios");            
        }

        if(!idRecebedor || !cpfRecebedor || !valorDepositado){
            statusCode=422
            throw new Error("Dados do recebedor são obrigatórios"); 
        }

        const userExistente = contas.find(cli => cli.id === userId)
        if(!userExistente){
            statusCode = 409
            throw new Error("Usuário(a) não encontrado");
        }

        const userDeposito = contas.find(cli => cli.id === idRecebedor)
        if(!userDeposito){
            statusCode = 409
            throw new Error("Usuário(a) não encontrado");
        }

        if(valorDepositado > userExistente.saldo){
            statusCode=422
            throw new Error("Saldo insuficiente para o depósito");
        }

        userExistente.saldo=userExistente.saldo - valorDepositado
        const transacaoDepositante = {
            valor:idRecebedor,
            descrição:`Transferência para ${idRecebedor}`,
            dataPagamento:`Transferência realizada ${dataAtual()}`
        }
        userExistente.extrato.push(transacaoDepositante)
        // ********************************************************************************
        userDeposito.saldo=userDeposito.saldo + valorDepositado
        const transacaoRecebedor = {
            valor:valorDepositado,
            descrição:`Transferência redecida de ${userId}`,
            dataPagamento:`Transferência recebida ${dataAtual()}`
        }
        userDeposito.extrato.push(transacaoRecebedor)
        
        statusCode = 201
        return res.status(statusCode).send("Transferência adicionada com sucesso")
    } catch (error: any) {
        statusCode = 404
        return res.status(statusCode).send({ message: error.message, status: statusCode })
    }
})


app.listen(3003, () => {
 console.log("Server is running in http://localhost:3003");
});
