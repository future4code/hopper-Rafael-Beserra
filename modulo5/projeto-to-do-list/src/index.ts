import express, { Request, Response } from "express";
import cors from "cors";
import { v4 as generateId } from "uuid";
import connection from "./database/connection";
import { Task, Users } from "./types/types";

const app = express();

app.use(express.json());
app.use(cors());

app.post("/user", async (req:Request, res:Response) => {
  let errorCode = 400
  try {
    const {name, nickname, email} = req.body;
    const regExp = /^(\w+)@[a-z]+(\.[a-z]+){1,2}$/i;

    if(!name || !nickname || !email){
      throw new Error("Necessário informar todos os dados");
    }

    if(regExp.test(email) !== true){
      throw new Error("Email em formato inválido");
    }

    const nicknameExist = await connection("TodoListUser").select("*").where({nickname})

    if(nicknameExist.length > 0){
      throw new Error("Nickname já utilizado");
    }

    const emailExist = await connection("TodoListUser").select("*").where({email});

    if(emailExist.length > 0){
      throw new Error("Email já cadastrado");
    }

    const newUser: Users = {
      id: generateId(),
      name,
      nickname,
      email
    }

    await connection.raw(`
      INSERT INTO TodoListUser(id, name, nickname, email)
      VALUES ("${newUser.id}", "${newUser.name}", "${newUser.nickname}", "${newUser.email}")
    `)

    res.status(200).send("Usuário criado com sucesso")
  } catch (error) {
    res.status(errorCode).send(error.message)
  }
})

// *************************************************************************************************************

app.get(`/user/:id`, async (req:Request, res:Response) => {
  let errorCode = 400
  try {
    const id = req.params.id;

    if(!id){
      throw new Error("necessário informar ID");
    }

    const idExist = await connection.raw(`
      SELECT id, nickname FROM TodoListUser
      WHERE id = "${id}";
    `)
    // const idExist = await connection("TodoListUser").select("*").where({id});
    if(idExist[0].length === 0){
      throw new Error("Usuário não encontrado");
    }

    // console.log(idExist)
    res.status(200).send(idExist[0])
  } catch (error) {
    res.status(errorCode).send(error.message)
  }
})

// *************************************************************************************************************

app.put(`/user/edit/:id`, async (req:Request, res:Response) => {
  let errorCode = 400
  try {
    const id = req.params.id;

    const {name, nickname} = req.body;

    if(!id){
      throw new Error("necessário informar ID");
    }

    const userFilter = await connection.raw(`
      SELECT id, nickname FROM TodoListUser
      WHERE id = "${id}";
    `)

    if(userFilter[0].length === 0){
      throw new Error("Usuário não encontrado");
    }

    await connection("TodoListUser")
    .update({name : name, nickname: nickname})
    .where({id});
    
    res.status(200).send("Usuário editado")
  } catch (error) {
    res.status(errorCode).send(error.message)
  }
})

// *************************************************************************************************************

app.post(`/task`, async (req:Request, res:Response) => {
  let errorCode = 400
  try {

    const {title, description, limitDate, creatorUserId} = req.body;

    if(!title || !description || !limitDate || !creatorUserId){
      throw new Error("Necessário informar todos os dados");
    }

    const newTask: Task = {
      id: generateId(),
      title,
      description,
      limit_date:limitDate,
      creator_user_id:creatorUserId,
    }
    
    function FormataStringData(data: string) {
      var dia  = data.split("/")[0];
      var mes  = data.split("/")[1];
      var ano  = data.split("/")[2];
    
      return ano + '-' + ("0"+mes).slice(-2) + '-' + ("0"+dia).slice(-2);
    }
    
    
    await connection.raw(`
    INSERT INTO TodoListTask(id, title, description, limit_date,creator_user_id)
    VALUES ("${newTask.id}", "${newTask.title}", "${newTask.description}", "${FormataStringData(newTask.limit_date)}", "${newTask.creator_user_id}")
  `)

    res.status(200).send("Tarefa criada com sucesso")
  } catch (error) {
    res.status(errorCode).send(error.message)
  }
})

// *************************************************************************************************************

app.get(`/task/:id`, async (req:Request, res:Response) => {
  let errorCode = 400
  try {
    const id = req.params.id;

    if(!id){
      throw new Error("necessário informar ID");
    }

    const idExist = await connection.raw(`
      SELECT * FROM TodoListTask
      WHERE id = "${id}";
    `)

    if(idExist[0].length === 0){
      throw new Error("Usuário não encontrado");
    }

    // console.log(idExist)
    res.status(200).send(idExist[0])

  } catch (error) {
    res.status(errorCode).send(error.message)
  }
})

// *************************************************************************************************************

app.listen(process.env.PORT || 3003, () => {
  console.log(`Servidor rodando na porta ${process.env.PORT || 3003}`)
});