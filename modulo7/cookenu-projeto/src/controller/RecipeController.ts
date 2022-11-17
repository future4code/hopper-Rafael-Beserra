import { Request, Response } from "express";
import { RecipeInfosDTO, TokenDTO } from "../business/model/recipe";
import { RecipeBusiness } from "../business/RecipeBusines";

export class RecipeController {
    constructor(private readonly recipeBusiness: RecipeBusiness) {}

    public createRecipe = async (req: Request, res: Response) => {
        try {
            // const {title, description} = req.body as string

            // const token: string = {
            //     token: req.headers.authorization as string
            // }

            const input: RecipeInfosDTO = {
                title: req.body.title,
                description: req.body.description,
                token: req.headers.authorization as string
            }
            const user = await this.recipeBusiness.createRecipe(input)

        } catch (error:any) {
            res.status(400).send(error.message)
        }
    }
}