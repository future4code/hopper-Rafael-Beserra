import { RecipeDatabase } from "../data/RacipeDatabase";
import { UserDatabase } from "../data/UserDatabase";
import { CustomError, Unauthorized } from "../error/customError";
import { HashManager } from "../services/HashManager";
import { IdGeneratorInterface } from "../services/IdGenerator";
import { TokenGenerator } from "../services/TokenGenerator";
import { Recipe, RecipeInfosDTO } from "./model/recipe";

export class RecipeBusiness {
    constructor(
        private readonly idGenerator: IdGeneratorInterface,
        private readonly tokenGenerator: TokenGenerator,
        private readonly hashManager: HashManager,
        private readonly userDatabase: UserDatabase,
        private readonly recipeDatabase : RecipeDatabase
    ){}

    public createRecipe = async (input: RecipeInfosDTO) => {
        try {
          const {title, description, token} = input
    
          const idUser = this.tokenGenerator.getTokenData(token)
    
          if(!idUser){
            throw new Unauthorized();
          }
                    
          const id: string = this.idGenerator.generateId();
          
          const createAt = new Date();
          
          const recipe = new Recipe(
            id,
            title,
            description,
            createAt,
            idUser.id
          )
          console.log(recipe)

          await this.recipeDatabase.addRecipe(recipe)

        } catch (error:any) {
          throw new CustomError(400, error.message)
        }
    }

    
}