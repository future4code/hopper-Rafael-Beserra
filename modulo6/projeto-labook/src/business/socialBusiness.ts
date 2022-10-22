import { SocialDatabase } from "../data/socialDatabase"
import { generateId } from "../services/generateId"

export class SocialBusiness {
    public createUser = async (input: any) => {
        try {
            const {name, email, password} = input

            const id: string = generateId()

            const socialDatabase = new SocialDatabase()

            await socialDatabase.insertUser({
                id,
                name,
                email,
                password
            })
        } catch (error:any) {
            throw new Error(error.message)
        }
    }
}