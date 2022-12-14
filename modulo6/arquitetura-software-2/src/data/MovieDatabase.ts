import { Movie } from "../types/movie";
import { BaseDatabase } from "./BaseDatabase";


export class MovieDatabase extends BaseDatabase {
    private static TABLE_NAME = "LABEFLIX_MOVIE";

    async insertMovie({id, title, description, duration_in_minutes, year_of_release}: Movie){
        await MovieDatabase.connection
        .insert({
            id,
            title,
            description,
            duration_in_minutes,
            year_of_release
        })
        .into(MovieDatabase.TABLE_NAME);
    }
}