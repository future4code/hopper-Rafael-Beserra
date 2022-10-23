import { Request, Response } from "express";
import { PostBusiness } from "../business/postBusiness";
import { postInputDTO } from "../model/postDTO";

export class PostController {
  public createPost = async (req: Request, res: Response) => {
    try {
        const {photo, description, type, createdAt, authorId} = req.body

        const input: postInputDTO = {
            photo,
            description,
            type,
            createdAt,
            authorId
        }

        const postBusiness = new PostBusiness()
        await postBusiness.createPost(input)

        res.status(201).send({message: "Post Criado!"})
    } catch (error: any) {
        res.status(error.statusCode || 400).send(error.message || error.sqlMessage)
    }
  };
}
