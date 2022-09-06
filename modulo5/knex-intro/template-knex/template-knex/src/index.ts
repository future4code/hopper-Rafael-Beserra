import express, {Request, Response } from "express";
import cors from "cors";
import connection from "./database/connection";
import { Funcionario } from "./type/types";

const app = express();

app.use(express.json());
app.use(cors());

app.get("/colaborador", async (req:Request, res:Response) => {
  let errorCode = 400
  try {
    const search = req.body.busca

    if(search){
      const result = await connection.raw(`
        SELECT * FROM Funfionário_List
        WHERE nome LIKE "%${search}%";
      `)
      res.status(200).send(result[0])
    } else {
      const result = await connection.raw(`
      SELECT * FROM Funfionário_List
      `)
      res.status(200).send(result[0])
    }
  } catch (error) {
    res.status(errorCode).send(error.message)
  }
})

// ***************************************************************************************************

app.post("/colaborador/criar", async (req:Request, res:Response) =>{
  let errorCode = 400
  try {
    const {nome, email} = req.body

    if(!nome || !email){
      throw new Error("Necessário informar usuário e senha");
    }

    if(email.includes("@") !== true){
      throw new Error("Email informado inválido");
    }
    
    const emailExist = await connection("Funfionário_List").select("*").where({email});

    console.log(emailExist)

    if(emailExist.length > 0){
      throw new Error("Usuário já cadastrado");
    }
    
    if(nome.length < 4){
      throw new Error("Nome inválido, muito curto");
    }

    const newCollaborator: Funcionario = {
      id: "008",
      nome,
      email
    }

    await connection.raw(`
        INSERT INTO Funfionário_List(id, nome, email)
        VALUES ("${newCollaborator.id}", "${newCollaborator.nome}", "${newCollaborator.email}");
    `)
    res.status(200).send("Usuário criado com sucesso")

  } catch (error) {
    res.status(errorCode).send(error.message)
  }
})

// ***************************************************************************************************

app.put("/colaborador/:id", async (req:Request, res:Response) =>{
  let errorCode = 400
  try {
    const id = req.params.id
    const email = req.body.email

    if(!id || !email){
      throw new Error("Necessário informar id e senha");
    }

    if(email.includes("@") !== true){
      throw new Error("Email informado inválido");
    }
    
    const idExist = await connection("Funfionário_List").select("*").where({id});

    if(idExist.length < 1){
      throw new Error("Usuário não encontrado");
    }

    const emailExist = await connection("Funfionário_List").select("*").where({email});
    
    if(emailExist.length > 0){
      throw new Error("Email já cadastrado");
    }

    await connection("Funfionário_List")
    .update({email})
    .where({id});

    res.status(200).send("Email editado com sucesso")
  } catch (error) {
    res.status(errorCode).send(error.message)
  }
})

// ***************************************************************************************************

app.delete("/colaborador/:id", async (req:Request, res:Response) =>{
  let errorCode = 400
  try {
    const id = req.params.id

    const idExist = await connection("Funfionário_List").select().where({id});

    if(idExist.length === 0){
      throw new Error("Usuário não encontrado");
    }

    await connection.raw(`
      DELETE FROM Funfionário_List
      WHERE id = ${id};
    `)

    res.status(200).send("Usuário deletado")
  } catch (error) {
    res.status(errorCode).send(error.message)
  }
})


app.listen(process.env.PORT || 3003, () => {
  console.log(`Servidor rodando na porta ${process.env.PORT || 3003}`)
});