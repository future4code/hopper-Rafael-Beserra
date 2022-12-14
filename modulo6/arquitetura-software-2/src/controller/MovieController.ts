import { Request, Response } from "express";
import { MovieBusiness } from "../business/MovieBusiness";

export class MovieController {
    public addMovie = async (
        req: Request, res: Response
    ) => {
        try {
            const {title, description, duration_in_minutes, year_of_release} = req.body

            const input = {
                title,
                description,
                duration_in_minutes,
                year_of_release
            }

            const movieBusiness = new MovieBusiness()
            await movieBusiness.addMovie(input)

            res.status(201).send({ message: "filme adicionado" })
        } catch (error: any) {
            res.status(400).send(error.message)
        }
    }
}