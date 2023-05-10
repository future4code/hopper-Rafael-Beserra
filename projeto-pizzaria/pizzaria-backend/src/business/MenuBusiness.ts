import { serialize } from "v8";
import { MenuDatabase } from "../data/MenuDatabase";
import { CustomError, Unauthorized } from "../error/customError";
import { TokenGenerator } from "../services/TokenGenerator";
import {
  DeleteRecipeByID,
  FindIdDTO,
  FindRecipeByID,
  Recipe,
  RecipeInfosDTO,
  RecipeInputDTO,
  TokenInputDTO,
} from "./model/menu";
import { IdGeneratorInterface } from "../services/IdGenerator";
import { UserRole } from "./model/user";

export class MenuBusiness {
  constructor(
    private readonly menuDatabase: MenuDatabase,
    private readonly tokenGenerator: TokenGenerator,
    private readonly idGenerator: IdGeneratorInterface
  ) {}

  public createRecipe = async (input: RecipeInputDTO) => {
    try {
      const { title, description, image, price, token } = input;

      const idUser = this.tokenGenerator.getTokenData(token);

      if (!idUser) {
        throw new Unauthorized();
      }

      if (!title || !price || !description) {
        throw new CustomError(
          400,
          'Preencha os campos "name", "price" e "ingredients"'
        );
      }

      const id: string = this.idGenerator.generateId();

      const createAt = new Date();

      const recipe = new Recipe(
        id,
        title,
        price,
        description,
        image,
        createAt,
        idUser.id
      );

      await this.menuDatabase.addRecipe(recipe);
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };

  public findAllRecipes = async () => {
    try {
      const recipe = await this.menuDatabase.findAllRecipes();

      return recipe;
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };

  public findRecipeById = async (input: FindRecipeByID) => {
    try {
      const { id, token } = input;

      if (!id || !token) {
        throw new CustomError(400, "Preencha os campos id e token");
      }

      const data = this.tokenGenerator.getTokenData(token);

      if (!data.id) {
        throw new Unauthorized();
      }

      const recipe = await this.menuDatabase.findRecipeByID(id);

      return recipe;
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };
}
