import { CustomError } from "../error/customError";
import { EditUserInput, User } from "../business/model/user";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {
  public findUser = async (email: string) => {
    try {
      const result = await UserDatabase.connection("Cookenu_User")
        .select()
        .where({ email });

      return result[0];
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };

  public insertUser = async (user: User) => {
    try {
      await UserDatabase.connection
      .insert(user)
        // .insert({
        //   id: user.getId(),
        //   name: user.getName(),
        //   email: user.getEmail(),
        //   password: user.getPassword()
        // })
        .into("Cookenu_User");
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };

  public findUserById = async (id: string) => {
    try {
      const result = await UserDatabase.connection("Cookenu_User").select("id", "name", "email").where({id})
      
      return result[0]
    } catch (error:any) {
      throw new CustomError(400, error.message)
    }
  }

  public findOtherUserById = async (id: string) => {
    try {
      const result = await UserDatabase.connection("Cookenu_User").select("id", "name", "email").where({id})

      return result[0]
    } catch (error:any) {
      throw new CustomError(400, error.message)
    }
  }

  public editUser = async (user: EditUserInput) => {
    try {
      await UserDatabase.connection
        .update({ name: user.name, nickname: user.nickname })
        .where({ id: user.id })
        .into("Auth_users");
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  }; 
}
