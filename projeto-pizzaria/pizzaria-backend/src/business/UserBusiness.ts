import { UserDatabase } from "../data/UserDatabase";
import {
  CustomError,
  InvalidEmail,
  InvalidName,
  InvalidPassword,
  Unauthorized,
  UserAlreadyExist,
  UserNotFound,
} from "../error/customError";
import {
  UserInputDTO,
  EditUserInputDTO,
  EditUserInput,
  LoginInputDTO,
  User,
  TokenDTO,
} from "./model/user";
import { HashManager } from "../services/HashManager";
import { IdGenerator, IdGeneratorInterface } from "../services/IdGenerator";
import { TokenGenerator } from "../services/TokenGenerator";
import { Address, AddressInputDTO } from "./model/address";

export class UserBusiness {
  constructor(
    private readonly idGenerator: IdGeneratorInterface,
    private readonly tokenGenerator: TokenGenerator,
    private readonly hashManager: HashManager,
    private readonly userDatabase: UserDatabase
  ) {}

  public createUser = async (input: UserInputDTO): Promise<string> => {
    try {
      const { name, email, password, role } = input;

      if (!name || !email || !password) {
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

      const findUserById = await this.userDatabase.findUser(email);

      if (findUserById) {
        throw new UserAlreadyExist();
      }

      const id: string = this.idGenerator.generateId();

      const hashPassword: string = await this.hashManager.hash(password);

      const user = new User(id, name, email, hashPassword);

      await this.userDatabase.createUser(user);
      const authentication = new TokenGenerator().generateToken(
        user.getId(),
        user.getRole()
      );

      return authentication;
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };

  public addAddress = async (input: AddressInputDTO) => {
    try {
      const { street, number, zipcode, token } = input;

      if (!street || !number || !zipcode) {
        throw new CustomError(
          400,
          'Preencha os campos "street", "number", "zipcode"'
        );
      }

      const data = this.tokenGenerator.getTokenData(token);

      if (!data.id) {
        throw new Unauthorized();
      }

      const id: string = this.idGenerator.generateId();

      const user_id = data.id;

      const address = new Address(id, user_id, street, number, zipcode);

      const resultAddress = await this.userDatabase.addAddress(address);
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

      const token = this.tokenGenerator.generateToken(user.id, user.role);

      return token;
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };

  public editUser = async (input: EditUserInputDTO) => {
    try {
      const { name, email, id, token } = input;

      if (!name || !email || !id || !token) {
        throw new CustomError(
          400,
          'Preencha os campos "id", "name", "email" e "token"'
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
        name,
        email,
        id,
      };

      await this.userDatabase.editUser(editUserInput);
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };

  public findUserByToken = async (input: TokenDTO) => {
    try {
      const { token } = input;

      const { id } = this.tokenGenerator.getTokenData(token);

      const user = await this.userDatabase.findUserById(id);

      return user;
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };

  public findAddressByToken = async (input: TokenDTO) => {
    try {
      const { token } = input;

      const { id } = this.tokenGenerator.getTokenData(token);

      const address = await this.userDatabase.findAddress(id);

      return address;
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };

  public tokenValidation = async (input: TokenDTO) => {
    try {
      const { token } = input;

      let login: string = "";

      const result = this.tokenGenerator.getTokenData(token);

      if (result) {
        login = "LOGGED";
      }

      return login;
    } catch (error: any) {
      let login = "NOTLOGGED";
      return login;
    }
  };
}
