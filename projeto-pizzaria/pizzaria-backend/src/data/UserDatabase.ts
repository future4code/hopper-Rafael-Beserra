import { CustomError } from "../error/customError";
import { EditUserInput, User } from "../business/model/user";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {
  private static TABLE_NAME = "PIZZARIA_User";

  public createUser = async (user: User) => {
    try {
      await UserDatabase.connection
      .insert(user)
        // .insert({
        //   id: user.getId(),
        //   name: user.getName(),
        //   email: user.getEmail(),
        //   password: user.getPassword()
        // })
        .into(UserDatabase.TABLE_NAME);
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };

  public findUser = async (email: string) => {
    try {
      const result = await UserDatabase.connection(UserDatabase.TABLE_NAME)
        .select()
        .where({ email });

      return result[0];
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };


  public findUserById = async (id: string) => {
    try {
      const result = await UserDatabase.connection(UserDatabase.TABLE_NAME).select("id", "name", "email").where({id})
      
      return result[0]
    } catch (error:any) {
      throw new CustomError(400, error.message)
    }
  }

  public findOtherUserById = async (id: string) => {
    try {
      const result = await UserDatabase.connection(UserDatabase.TABLE_NAME).select("id", "name", "email").where({id})

      return result[0]
    } catch (error:any) {
      throw new CustomError(400, error.message)
    }
  }

  public editUser = async (user: EditUserInput) => {
    try {
      await UserDatabase.connection
        .update({ name: user.name, email: user.email })
        .where({ id: user.id })
        .into(UserDatabase.TABLE_NAME);
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  }; 
}
