import express, { query, Request, Response } from "express";
import cors from 'cors'
import { data } from "./data";
import { afazeres } from "./data";

const app = express()
app.use(express.json())
app.use(cors())

app.get("/ping", (req: Request, res: Response) => {
    res.status(200).send(data)
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
    
    if(!newTodo){
        res.status(400).send("newTodo obrigatório")
    }

    data.push(newTodo)

    res.status(207).send(newTodo)
});

// *****************************************************************************************

app.put('/afazeres/editando', (req: Request, res: Response) => {
    const userId = Number(req.query.userId)
    const id = Number(req.query.id)
    const updateTodo = req.body

    if(!userId || !id || !updateTodo){
        res.status(400).send("Obrigatórios userId, id e updateTodo ")
    }

    data.map(tarefa => {
        if (userId === tarefa.userId && id === tarefa.id){
            return tarefa.completed = updateTodo.completed
        }
        return tarefa
    })

    res.status(200).send(data)
})

// *****************************************************************************************

app.delete('/afarezers/delete', (req: Request, res: Response) => {
    const userId = Number(req.query.userId)

    if(!userId){
        res.status(400).send("userId obrigatório")
    }

    const newdata = data.filter(tarefa => {
        if(tarefa.userId !== userId){
            return true
        }
    })

    res.status(200).send(newdata)
})

// *****************************************************************************************

app.get('/afazeres/filter', (req: Request, res: Response) => {
    const userId = Number(req.query.userId)

    const findToDo = data.filter(tarefa => {
        if(tarefa.userId === userId){
            return tarefa
        }
    })

    res.status(200).send(findToDo)
})

// *****************************************************************************************
app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003");
});