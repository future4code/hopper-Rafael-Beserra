import { Request, Response } from "express";
import { rmSync } from "fs";
import { MenuBusiness } from "../business/MenuBusiness";
import { FindRecipeByID, RecipeInputDTO, TokenDTO } from "../business/model/menu";

export class MenuController {
    constructor(private readonly menuBusiness: MenuBusiness) {}

    public createRecipe = async (req: Request, res: Response) => {
        try {
            const input: RecipeInputDTO= {
                name: req.body.name,
                ingredients: req.body.ingredients,
                price: req.body.price,
                token: req.headers.authorization as string
            }            

            const recipe = await this.menuBusiness.createRecipe(input)

            res.status(200).send({ message: "Receita adicionada com sucesso!"});
        } catch (error:any) {
            res.status(400).send(error.message);
        }
    }

    public findAllRecipes = async (req: Request, res: Response) => {
        try {

            const token: TokenDTO = {
                token: req.headers.authorization as string
            };
            
            const recipes = await this.menuBusiness.findAllRecipes(token)

            res.status(200).send({ message: "Busca ok"});
        } catch (error:any) {
            res.status(400).send(error.message);
        }
    };

    public findRecipeById = async (req: Request, res: Response) => {
        try {
            const input: FindRecipeByID = {
                id: req.params.id,
                token: req.headers.authorization as string
            };

            const recipe = await this.menuBusiness.findRecipeById(input)

            res.status(200).send({message: "Busca ok"});
        } catch (error:any) {
            res.status(400).send(error.message);
        }
    };
}