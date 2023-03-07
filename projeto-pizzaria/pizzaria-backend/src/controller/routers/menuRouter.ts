import express from "express"
import { MenuBusiness } from "../../business/MenuBusiness";
import { MenuDatabase } from "../../data/MenuDatabase";
import { IdGenerator } from "../../services/IdGenerator";
import { TokenGenerator } from "../../services/TokenGenerator";
import { MenuController } from "../MenuController";

export const menuRouter = express.Router();

const menuBusiness = new MenuBusiness(
    new MenuDatabase(),
    new TokenGenerator(),
    new IdGenerator(),
);

const menuController = new MenuController(menuBusiness)

menuRouter.post("/add-recipe-menu", menuController.createRecipe)
menuRouter.get("/busca-receita/:id", menuController.findRecipeById)