import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { EditUserInputDTO, FindIdDTO, LoginInputDTO, UserInputDTO } from "../business/model/user";
import { UserDatabase } from "../data/UserDatabase";

export class UserController {
  constructor(private readonly userBusiness: UserBusiness) {}

  public signup = async (req: Request, res: Response) => {
    try {
      const { name, email, password } = req.body;

      const input: UserInputDTO = {
        name,        
        email,
        password
      };

      const token = await this.userBusiness.createUser(input);

      res.status(201).send({ message: "Usuário criado!", token });
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  };

  public login = async (req: Request, res: Response) => {
    try {
      const { email, password } = req.body;

      const input: LoginInputDTO = {
        email,
        password,
      };
      const token = await this.userBusiness.login(input);

      res.status(200).send({ message: "Usuário logado!", token });
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  };

  public editUser = async (req: Request, res: Response) => {
    try {
      const input: EditUserInputDTO = {
        name: req.body.name,
        nickname: req.body.nickname,
        id: req.params.id,
        token: req.headers.authorization as string,
      };

      await this.userBusiness.editUser(input);

      res.status(201).send({ message: "Usuário alterado!" });
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  };

  public findUserByToken = async (req: Request, res: Response) => {
    try {
      const input: FindIdDTO = {
        token: req.headers.authorization as string
      }

      const user = await this.userBusiness.findUserByToken(input)

      // const userData = {
      //   id: user.id,
      //   name: user.name,
      //   email: user.email
      // }

      res.status(201).send({message: "Dados do usuário", id: user.id, name: user.name, email: user.email})
    } catch (error: any) {
      res.status(400).send(error.message)
    }
  }

  public findOtherUserById = async (req: Request, res: Response) => {
    try {
      const token = req.headers.authorization as string;

      const id = req.params.id

      const user = await this.userBusiness.findOtherUserById(token, id)

      res.status(201).send({message: "Dados do usuário", id: user.id, name: user.name, email: user.email})

    } catch (error:any) {
      res.status(400).send(error.message)
    }
  }
}
