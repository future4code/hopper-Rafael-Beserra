import express, { query, Request, Response } from "express";
import cors from 'cors'
import { data } from "./data";

const app = express()
app.use(express.json())
app.use(cors())

app.get("/ping", (req: Request, res: Response) => {
    res.status(200).send("Pong!")
})

// *****************************************************************************************

app.get('/afazeres', (req: Request, res: Response) => {
    const afazerFilte = Boolean(req.query.afazerFilte)

    if(!afazerFilte){
        res.status(400).send("Tipo de tarefa obridatória")
    }

    const afazeres = data.filter((afaz) => {
        return afaz.completed === true
    })

    res.status(200).send(afazeres)
});

// *****************************************************************************************

app.post('/afazeres/adicionando', (req: Request, res: Response) => {
    const newTodo = req.body
    
    data.push(newTodo)

    res.status(207).send(newTodo)
});

// *****************************************************************************************

app.put('/afazeres/editando', (req: Request, res: Response) => {
    const userId = Number(req.query.userId)
    const id = Number(req.query.id)
    const updateTodo = req.body

    data = data.map(tarefa => {
        if (userId === tarefa.userId && id === tarefa.id){
            return updateTodo
        }
        return tarefa
    })

    res.status(200).send(updateTodo)

})

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003");
});