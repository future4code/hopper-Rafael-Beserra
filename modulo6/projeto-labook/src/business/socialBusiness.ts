import { SocialDatabase } from "../data/socialDatabase"
import { InvalidEmail } from "../error/InvalidEmail"
import { ShortName } from "../error/ShortName"
import { generateId } from "../services/generateId"

export class SocialBusiness {
    public createUser = async (input: any) => {
        try {
            const {name, email, password} = input

            if(!name || !email || !password){
                throw new Error( 'Preencha todos os campos')
            }

            if(!email.includes("@")){
                throw new InvalidEmail()
            }

            if(name.length < 3){
                throw new ShortName()
            }

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