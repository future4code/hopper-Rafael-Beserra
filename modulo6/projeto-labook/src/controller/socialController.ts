import { Request, Response } from "express";
import { SocialBusiness } from "../business/socialBusiness";

export class SocialController {
    public createUser = async (
        req: Request,
        res: Response
    ) => {
        try {
            let message = "Success!"
            const { name, email, password } = req.body

            const input = {
                name,
                email,
                password
            }

            const socialBusiness = new SocialBusiness()
            await socialBusiness.createUser(input)

        } catch (error:any) {
            res.status(400).send(error.message)
        }
    }
}