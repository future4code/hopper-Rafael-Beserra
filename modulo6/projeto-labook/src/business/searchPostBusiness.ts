import { SocialDatabase } from "../data/socialDatabase"

export class SearchPostBusiness {
    public searchPost = async (input:string) => {
        try {
            const id = input

            const socialDatabase = new SocialDatabase()

            await socialDatabase.searchByName(id)
        } catch (error:any) {
            throw new Error(error.message)
        }
    }
}