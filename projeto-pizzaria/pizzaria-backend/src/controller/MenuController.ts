import { Request, Response } from "express";
import { MenuBusiness } from "../business/MenuBusiness";
import {
  DeleteRecipeByID,
  FindRecipeByID,
  RecipeInputDTO,
} from "../business/model/menu";

export class MenuController {
  constructor(private readonly menuBusiness: MenuBusiness) {}

  public createRecipe = async (req: Request, res: Response) => {
    try {
      const input: RecipeInputDTO = {
        title: req.body.name,
        description: req.body.ingredients,
        price: req.body.price,
        image: req.body.image,
        token: req.headers.authorization as string,
      };

      const recipe = await this.menuBusiness.createRecipe(input);

      res.status(200).send({ message: "Receita adicionada com sucesso!" });
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  };

  public findAllRecipes = async (req: Request, res: Response) => {
    try {
      const recipes = await this.menuBusiness.findAllRecipes();

      res.status(200).send({ message: "Busca ok", recipes });
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  };

  public findRecipeById = async (req: Request, res: Response) => {
    try {
      const input: FindRecipeByID = {
        id: req.params.id,
        token: req.headers.authorization as string,
      };

      const recipe = await this.menuBusiness.findRecipeById(input);

      res.status(200).send({ message: "Busca ok" });
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  };
}
