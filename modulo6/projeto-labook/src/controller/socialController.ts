import { Request, Response } from "express";
import { SocialBusiness } from "../business/socialBusiness";
import { userInputDTO } from "../model/userDTO";

export class SocialController {
  public createUser = async (req: Request, res: Response) => {
    try {
      const { name, email, password } = req.body;

      const input: userInputDTO = {
        name,
        email,
        password,
      };

      const socialBusiness = new SocialBusiness();
      await socialBusiness.createUser(input);

      res.status(201).send({ message: "Usuário Criado" });
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  };
}
