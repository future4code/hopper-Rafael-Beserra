import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import {
  EditUserInputDTO,
  TokenDTO,
  LoginInputDTO,
  UserInputDTO,
} from "../business/model/user";
import { AddressInputDTO } from "../business/model/address";

export class UserController {
  constructor(private readonly userBusiness: UserBusiness) {}

  public signup = async (req: Request, res: Response) => {
    try {
      const { name, email, password, role } = req.body;

      const input: UserInputDTO = {
        name,
        email,
        password,
        role,
      };

      const token = await this.userBusiness.createUser(input);

      res.status(201).send({ message: "Usuário criado!", token });
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  };

  public registerAddress = async (req: Request, res: Response) => {
    try {
      const input: AddressInputDTO = {
        street: req.body.street,
        number: req.body.number,
        zipcode: req.body.zipcode,
        token: req.headers.authorization as string,
      };

      const address = this.userBusiness.addAddress(input);

      res.status(201).send({ message: "endereço adicionado!" });
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
        email: req.body.email,
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
      const input: TokenDTO = {
        token: req.headers.authorization as string,
      };

      const user = await this.userBusiness.findUserByToken(input);

      res.status(201).send({
        message: "Dados do usuário",
        id: user.id,
        name: user.name,
        email: user.email,
      });
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  };

  public findAddressByToken = async (req: Request, res: Response) => {
    try {
      const input: TokenDTO = {
        token: req.headers.authorization as string,
      };

      const address = await this.userBusiness.findAddressByToken(input);

      res.status(201).send({ message: "Endereço consultado", address });
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  };

  public tokenValidation = async (req: Request, res: Response) => {
    try {
      const input: TokenDTO = {
        token: req.headers.authorization as string,
      };

      const login = await this.userBusiness.tokenValidation(input);

      res.status(201).send({ message: "Consulta realizada", login });
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  };
}
