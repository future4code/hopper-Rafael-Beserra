import { UserDatabase } from "../data/UserDatabase";
import { InvalidEmail } from "../error/InvalidEmail";
import { ShortName } from "../error/ShortName";
import { generateID } from "../services/generateId";

export class UserBusiness {
   public createUser = async (input: any) => {
      try {
         const { name, nickname, email, password } = input

         if (
            !name ||
            !nickname ||
            !email ||
            !password
         ) {
            throw new Error('Preencha os campos "name","nickname", "email" e "password"')
         }

         if (!email.includes("@")) {
            throw new InvalidEmail()
         }

         if (name.length < 3) {
            throw new ShortName()
         }

         const id: string = generateID()

         const userDatabase = new UserDatabase()

         await userDatabase.insertUser({
            id,
            name,
            nickname,
            email,
            password
         })

      } catch (error: any) {
         throw new Error(error.message)
      }
   }
}
