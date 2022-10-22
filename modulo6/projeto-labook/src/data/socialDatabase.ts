import { BaseDatabase } from "./BaseDatabase";
import { user } from "../model/user";

export class SocialDatabase extends BaseDatabase{
    private userTable = 'labook_users'

    public insertUser = async (user: user) => {
        try {
            await SocialDatabase.connection.insert({
                id: user.id,
                name: user.name,
                email: user.email,
                password: user.password
            }).into(this.userTable)
        } catch (error: any) {
            
        }
    }
}