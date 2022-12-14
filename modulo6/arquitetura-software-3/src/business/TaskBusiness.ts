import { TaskDatabase } from "../data/TaskDatabase"
import { ShortName } from "../error/ShortName"
import { generateID } from "../services/generateId"


export class TaskBusiness {

   public createTask = async (
      input: any
   ) => {
      try {
         const { title, description, deadline, authorId } = input

         if (
            !title ||
            !description ||
            !deadline ||
            !authorId
         ) {
            throw new Error('"title", "description", "deadline" e "authorId" são obrigatórios')
         }

         if(title.length < 3) {
            throw new ShortName()
         }

         const id: string = generateID()

         const taskDatabase = new TaskDatabase()

         await taskDatabase.insertTask({
            id,
            title,
            description,
            deadline,
            authorId,
         })

      } catch (error: any) {
         throw new Error(error.message)
      }
   }
}
