import express, { Request, Response } from "express";
import { AddressInfo } from "net";
import cors from "cors";
import { user, users, USER_TYPE } from "./data";
import { v4 as generateId } from 'uuid';

const app = express();
app.use(express.json());
app.use(cors())

app.get("/usuarios", (req: Request, res: Response) =>{
  let statusCode = 500
  try {
    res.status(201).send(users)

  } catch (error: any) {
    return res.status(statusCode).send({ message: error.message, status: statusCode })
}
})

// *****************************************************************************************************************

app.get("/usuarios/buscatipo", (req: Request, res: Response) =>{
  let statusCode = 500
  try {
    const type = String(req.query.type).toUpperCase()

    if(!type){
      throw new Error("Tipo de usuário não informado");
    }
    
    if(type === "ADMIN"){
      const typeUser = users.filter(u => {
        if(u.type === type){
          return true
        }
      })
      res.status(201).send(typeUser)
    } else {
      if(type === "NORMAL"){
        const typeUser = users.filter(u => {
          if(u.type === type){
            return true
          }
        })
        statusCode = 200
        res.status(statusCode).send(typeUser)
      } else {
        statusCode=402
        throw new Error("Parametro informado inválido ");
      }
    }
    
  } catch (error: any) {
    return res.status(statusCode).send({ message: error.message, status: statusCode })
}
})

// *****************************************************************************************************************

app.get("/usuarios/:nome", (req: Request, res: Response) =>{
  let statusCode = 500
  try {
    const findUser = req.params.nome
    
    if(!findUser){
      statusCode = 422
      throw new Error("Nome é obrogatório");
    }



    const userExistente = users.find(u => {
      return u.name.toLowerCase() === findUser.toLowerCase()
    })

    if(!userExistente){
      statusCode = 201
      throw new Error("Usuário não existe");
    }

    statusCode = 201
    res.status(statusCode).send(userExistente)

  } catch (error: any) {
    return res.status(statusCode).send({ message: error.message, status: statusCode })
}
})

// *****************************************************************************************************************
// Se mudar para POS dá erro porque o PUT edita, ou seja, post é um ".push" e o put um ".map"
app.post("/usuarios/adicionar", (req: Request, res: Response) => {
  let statusCode = 500
  try {
    let {name, email, type, age} = req.body

    if(!name || !email || !type || !age){
      statusCode=402
      throw new Error("Favor inserir todos os parâmetros");
    }
    
    type=type.toLowerCase()
    email=email.toLowerCase()

    if (type === "normal"){
      type = USER_TYPE.NORMAL
    }else{
      if (type === "admin"){
        type = USER_TYPE.NORMAL
      } else {
        statusCode=402
        throw new Error("Tipo de usuário inválido");
      }
    }

    const userExistente = users.find(u => {
      return u.email === email
    })
    if(userExistente){
      statusCode=402
      throw new Error("Email já cadastrado");
    }

    const newUser= 
    {
      id: Math.random(),
      name,
      email,
      type,
      age
    }

    users.push(newUser)
    statusCode = 201
    res.status(statusCode).send(users)

  } catch (error: any) {
    return res.status(statusCode).send({ message: error.message, status: statusCode })
  }
})

// *****************************************************************************************************************

// Alterado o 6 que já existia pois o adicionado anteriormente está com id 
app.put("/usuarios/editar/", (req: Request, res: Response) => {
  let statusCode = 500
  try {
    let newName = String(req.body.name)
    const userId = Number(req.body.id)

    if(!newName){
      statusCode=402
      throw new Error("Novo nome obrigatório");
    }

    const userExistente = users.find(u => {
      return u.id === userId
    })

    if(userExistente){
      users.map(u => {
        if(u.id === userId){
          u.name = `${u.name}${newName}`
        }
        return u
      })
      statusCode:201
      res.status(statusCode).send()
    }

    // statusCode=201
    // res.status(statusCode).send(userExistente)

  } catch (error: any) {
    return res.status(statusCode).send({ message: error.message, status: statusCode })
  }
})

// *****************************************************************************************************************

app.patch("/usuarios/reeditar", (req: Request, res: Response) =>{
  let statusCode = 500
  try {
    let newName = String(req.body.name)
    const userId = Number(req.body.id)

    if(!newName){
      statusCode=402
      throw new Error("Novo nome obrigatório");
    }

    const userExistente = users.find(u => {
      return u.id === userId
    })

    if(userExistente){
      users.map(u => {
        if(u.id === userId){
          u.name = `${u.name}${newName}`
        }
        return u
      })
      statusCode:201
      res.status(statusCode).send()
    }
  } catch (error: any) {
    return res.status(statusCode).send({ message: error.message, status: statusCode })
  }
})

// *****************************************************************************************************************

app.delete("/usuarios/remover/:id", (req: Request, res: Response) =>{
  let statusCode = 500
  try {
    const userId = Number(req.params.id)

    if(!userId){
      statusCode = 201
      throw new Error("Id obigatório");
    }

    let position = users.findIndex(u => u.id === userId)

    users.splice(position, 1)

    statusCode=201
    return res.status(statusCode).send(users)

  } catch (error: any) {
    return res.status(statusCode).send({ message: error.message, status: statusCode })
  }
})

// *****************************************************************************************************************

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
})