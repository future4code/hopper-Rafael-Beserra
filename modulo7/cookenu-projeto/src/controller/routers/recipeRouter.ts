import express from "express"
import { RecipeBusiness } from "../../business/RecipeBusines";
import { RecipeDatabase } from "../../data/RacipeDatabase";
import { UserDatabase } from "../../data/UserDatabase";
import { HashManager } from "../../services/HashManager";
import { IdGenerator } from "../../services/IdGenerator";
import { TokenGenerator } from "../../services/TokenGenerator";
import { RecipeController } from "../RecipeController";

export const recipeRouter = express.Router();

const recipeBusiness = new RecipeBusiness(
    new IdGenerator(),
    new TokenGenerator(),
    new HashManager(),
    new UserDatabase(),
    new RecipeDatabase()
);

const recipeController = new RecipeController(recipeBusiness)

recipeRouter.post("/recipe", recipeController.createRecipe);