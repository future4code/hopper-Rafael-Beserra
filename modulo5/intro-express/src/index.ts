import express, { Request, Response } from "express";
import cors from 'cors'
import { AddressInfo } from "net";
import { users } from "./usuarios";

const app = express();

app.use(express.json());
app.use(cors())

// ********************************************************************************************

app.get("/", (request: Request, res: Response) => {
    const usuarios = users.map((user) => {
        return user
    }).flat(1)
    res.status(200).send(usuarios)
})

// ********************************************************************************************

app.get("/usuarios/postagens", (request: Request, res: Response) => {
    const usuarios = users.map((user) => {
        return user.posts
    }).flat(1)

    res.status(200).send(usuarios)
})

// ********************************************************************************************

app.get("/usuarios", (request: Request, res: Response) => {
    const userId = Number(request.query.id)

    if (!userId){
        res.status(400).send("Atenção, id obrigatório")
    }
    
    let userDetail
    users.forEach(users => {
        if (users.id === userId) {
            userDetail = users.posts
        }
    })

    res.status(200).send(userDetail)

})

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
    // console.log(userDetail)
  } else {
    console.error(`Failure upon starting server.`);
  }
});;