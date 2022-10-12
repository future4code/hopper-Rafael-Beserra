import { UserDatabase } from "../data/UserDatabase";

export class UserBusiness {
    public createUser = async (input: any) => {
        try {
            const {name, email, password} = input

            if (!name || !email || !password){
                throw new Error("Preencha todos os campos");
            }

            const id: string = Date.now().toString()

            const userDatabase = new UserDatabase()
            await userDatabase.insertUser({
                id,
                name,
                email,
                password
            })

        } catch (error:any) {
            
        }
    }

    
}