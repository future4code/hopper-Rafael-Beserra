import { serialize } from "v8";
import { MenuDatabase } from "../data/MenuDatabase";
import { CustomError, Unauthorized } from "../error/customError";
import { TokenGenerator } from "../services/TokenGenerator";
import { FindIdDTO, FindRecipeByID, Recipe, RecipeInfosDTO, RecipeInputDTO, TokenDTO } from "./model/menu";
import { IdGeneratorInterface } from "../services/IdGenerator";

export class MenuBusiness {
  constructor(
    private readonly menuDatabase: MenuDatabase,
    private readonly tokenGenerator: TokenGenerator,
    private readonly idGenerator: IdGeneratorInterface,
  ){}
    
  public createRecipe = async (input: RecipeInputDTO) => {
    try {
      const {name, ingredients, price, token} = input;

      const idUser = this.tokenGenerator.getTokenData(token);
      console.log(idUser)
      if(!idUser){
        throw new Unauthorized();
      }

      if(!name || !price || !ingredients){
        throw new CustomError(
          400,
          'Preencha os campos "name", "price" e "ingredients"'
        )
      }

      const id: string = this.idGenerator.generateId();

      const createAt = new Date();

      const recipe = new Recipe(
        id,
        name,
        price,
        ingredients,
        createAt,
        idUser.id
      );
      
      await this.menuDatabase.addRecipe(recipe)

    } catch (error:any) {
      throw new CustomError(400, error.message);
    }
  };

  public findAllRecipes = async (input: TokenDTO) => {
    try {
      const {token} = input;

      if (!token){
        throw new CustomError(
          400,
          'Token não informado'
        );
      }

      const data = this.tokenGenerator.getTokenData(token)
      
      if(!data.id){
        throw new Unauthorized();
      }

      await this.menuDatabase.findAllRecipes();
    } catch (error:any) {
      throw new CustomError(400, error.message);
    }
  };

  public findRecipeById = async (input: FindRecipeByID) => {
    try {
      // const id = input.id;
      // const token = input.token;

      const {id , token} = input;

      if(!id || !token){
        throw new CustomError(
          400,
          "Preencha os campos id e token"
        );
      }

      const data = this.tokenGenerator.getTokenData(token)

      if(!data.id){
        throw new Unauthorized();
      }
      
      const recipe = await this.menuDatabase.findRecipeByID(id)

      console.log(recipe)
      return recipe

    } catch (error:any) {
      throw new CustomError(400, error.message);
    }
  }
}