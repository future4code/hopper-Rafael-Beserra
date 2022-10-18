import { v4 as generateId } from 'uuid';
import { MovieDatabase } from "../data/MovieDatabase";

export class MovieBusiness {
    public addMovie = async (input: any) => {
        try {
            const {title, description, duration_in_minutes, year_of_release} = input

            const id = generateId()

            const movieDatabase = new MovieDatabase()

            await movieDatabase.insertMovie({
                id,
                title,
                description,
                duration_in_minutes,
                year_of_release
            })

        } catch (error:any) {
            throw new Error(error.message);
        }
    }
}