import { Request, Response } from "express";
import { SearchPostBusiness } from "../business/searchPostBusiness";

export class SearchPostController {
    public searchPost = async (req: Request, res: Response) => {
        try {
            const id = req.params.id

            const searchSocialBusiness = new SearchPostBusiness()
            await searchSocialBusiness.searchPost(id)

            res.status(201).send({message: "Busca ok"})
        } catch (error:any) {
            res.status(400).send(error.message);
        }
    }
}