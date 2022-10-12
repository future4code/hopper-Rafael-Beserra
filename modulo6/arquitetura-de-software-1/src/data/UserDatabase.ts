import { stringify } from "querystring";
import { user } from "../Types/user";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase{

    public insertUser = async (
        user: user
    ) => {
        try {
            await UserDatabase.connection.insert({
                id:user.id,
                name:user.name,
                email:user.email,
                password:user.password
            }).into('User_Arq')
        } catch (error: any) {
            throw new Error(error.message);
        }
    }

    public getAllUser = async () => {
        try {
            await UserDatabase.connection.select("*").from('User_Arq')
        } catch (error:any) {
            
        }
    }
}