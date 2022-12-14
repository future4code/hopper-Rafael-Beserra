import { Recipe } from "../business/model/recipe";
import { CustomError } from "../error/customError";
import { BaseDatabase } from "./BaseDatabase";

export class RecipeDatabase extends BaseDatabase{
    public addRecipe = async (recipe: Recipe) => {
        try {
            await RecipeDatabase.connection
            .insert(recipe)
            .into("Cookenu_recipe")
        } catch (error:any) {
            throw new CustomError(400, error.message);
        }
    }
}