import { Recipe } from "../business/model/menu";
import { CustomError } from "../error/customError";
import { BaseDatabase } from "./BaseDatabase";

export class MenuDatabase extends BaseDatabase {
  private static TABLE_NAME = "PIZZARIA_Menu";

  public findAllRecipes = async () => {
    try {
      const result = await MenuDatabase.connection(
        MenuDatabase.TABLE_NAME
      ).select("*");
      return result;
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };

  public findRecipeByID = async (id: string) => {
    try {
      const result = await MenuDatabase.connection(MenuDatabase.TABLE_NAME)
        .select()
        .where({ id });
      return result[0];
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };

  public addRecipe = async (recipe: Recipe) => {
    try {
      await MenuDatabase.connection
        .insert(recipe)
        .into(MenuDatabase.TABLE_NAME);
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };

  public editRecipe = async () => {
    try {
      await MenuDatabase.connection.update({}).where({}).into("PIZZARIA_Menu");
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };
}
