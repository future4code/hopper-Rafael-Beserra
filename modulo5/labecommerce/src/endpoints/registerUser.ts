import { Request, Response } from "express";
import { connection } from "../data/connection";
import { User } from "../types";
import { v4 as generateId } from "uuid";

export const postCreateUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  let errorCode = 400;
  try {
    const { name, email, password } = req.body;

    if(!name || !email || !password){
      throw new Error("Necessário informar todos os dados");
    }

    const emailExist = await connection.raw(`
      SELECT email FROM labecommerce_users
      WHERE email = "${email}";
    `)

    console.log(emailExist[0])

    if(emailExist[0].length > 0){
      errorCode = 410
      throw new Error("Email Já cadastrado"); 
    }

    let newUser: User = {
      id: generateId(),
      name,
      email,
      password
    };

    await connection.raw(`
      INSERT INTO labecommerce_users(id, name, email, password)
      VALUES("${newUser.id}", "${newUser.name}", "${newUser.email}", "${newUser.password}");
    `)

    res.status(200).send("Usuário cadastrado");
  } catch (error :any) {
    res.status(errorCode).send(error.message);
  }
};