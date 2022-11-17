import { UserDatabase } from "../data/UserDatabase";
import {
  CustomError,
  InvalidEmail,
  InvalidName,
  InvalidPassword,
  InvalidRole,
  Unauthorized,
  UserAlreadyExist,
  UserNotFound,
} from "../error/customError";
import {
  UserInputDTO,
  EditUserInputDTO,
  EditUserInput,
  LoginInputDTO,
  UserRole,
  AuthenticationData,
  UserInsert,
  User,
  FindIdDTO,
  FindIdIdDTO,
} from "./model/user";
import { HashManager } from "../services/HashManager";
import { IdGenerator, IdGeneratorInterface } from "../services/IdGenerator";
import { TokenGenerator } from "../services/TokenGenerator";

export class UserBusiness {
  constructor(
    private readonly idGenerator: IdGeneratorInterface,
    private readonly tokenGenerator: TokenGenerator,
    private readonly hashManager: HashManager,
    private readonly userDatabase: UserDatabase
  ) {}

  public createUser = async (input: UserInputDTO): Promise<string> => {
    try {
      const { name, email, password } = input;
      

      if (!name  || !email || !password) {
        throw new CustomError(
          400,
          'Preencha os campos "name", "email", "password"'
        );
      }

      if (name.length < 4) {
        throw new InvalidName();
      }

      if (!email.includes("@")) {
        throw new InvalidEmail();
      }

      const findUserById = await this.userDatabase.findUser(email)
      console.log(findUserById)

      if (findUserById){
        throw new UserAlreadyExist();
      }

      const id: string = this.idGenerator.generateId();

      const hashPassword: string = await this.hashManager.hash(password);
      console.log(hashPassword)
      const user = new User(id, name, email, hashPassword) 

      
      await this.userDatabase.insertUser(user);
      const authentication = new TokenGenerator().generateToken(user.getId())
      // const token = this.tokenGenerator.generateToken(id);
      // return token;
      return authentication;

    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };

  public login = async (input: LoginInputDTO): Promise<string> => {
    try {
      const { email, password } = input;

      if (!email || !password) {
        throw new CustomError(400, 'Preencha os campos"email" e "password"');
      }

      if (!email.includes("@")) {
        throw new InvalidEmail();
      }

      const user = await this.userDatabase.findUser(email);

      if (!user) {
        throw new UserNotFound();
      }

      const isValidPassword: boolean = await this.hashManager.compare(
        password,
        user.password
      );

      if (!isValidPassword) {
        throw new InvalidPassword();
      }

      const token = this.tokenGenerator.generateToken(user.id);

      return token;
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };

  public editUser = async (input: EditUserInputDTO) => {
    try {
      const { name, nickname, id, token } = input;

      if (!name || !nickname || !id || !token) {
        throw new CustomError(
          400,
          'Preencha os campos "id", "name", "nickname" e "token"'
        );
      }

      const data = this.tokenGenerator.getTokenData(token);


      if (!data.id) {
        throw new Unauthorized();
      }

      if (name.length < 4) {
        throw new InvalidName();
      }

      const editUserInput: EditUserInput = {
        id,
        name,
        nickname,
      };

      await this.userDatabase.editUser(editUserInput);
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };

  public findUserByToken = async (input: FindIdDTO) => {
    try {
      const {token} = input;

      const {id} = this.tokenGenerator.getTokenData(token)

      const user = await this.userDatabase.findUserById(id)

      return user
      
    } catch (error:any) {
      throw new CustomError(400, error.message)
    }
  }

  public findOtherUserById = async (token: string, id: string) => {
    try {
      const idUser = this.tokenGenerator.getTokenData(token)

      if(!idUser){
        throw new Unauthorized();
      }

      const user = await this.userDatabase.findUserById(id)

      return user
    } catch (error:any) {
      throw new CustomError(400, error.message)
    }
  }

}
