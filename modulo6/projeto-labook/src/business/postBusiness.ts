import { SocialDatabase } from "../data/socialDatabase";
import { CustomError } from "../error/CustomError";
import { InvalidRequest } from "../error/InvalidRequest";
import { postInputDTO } from "../model/postDTO";
import { generateId } from "../services/generateId";

export class PostBusiness{
    public createPost = async (input: postInputDTO) => {
        try {
            const {photo, description, type, createdAt, authorId} = input

            if(!photo || !description || !type || !createdAt || !authorId){
                throw new InvalidRequest()
            }

            const id: string = generateId()

            const socialDatabase = new SocialDatabase()

            await socialDatabase.insertPost({
                id,
                photo,
                description,
                type,
                createdAt,
                authorId
            })
        } catch (error:any) {
            throw new CustomError(error.statusCode, error.message || error.sqlMessage)
        }
    }
}