import { Request, Response } from "express";

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



        } catch (error:any) {
            res.status(400).send(error.message)
        }
    }
}