import { BaseDatabase } from "./BaseDatabase";
import { user } from "../model/user";
import { post } from "../model/post";

export class SocialDatabase extends BaseDatabase{
    private userTable = 'labook_users'
    private postTable = 'labook_posts'
    public insertUser = async (user: user) => {
        try {
            await SocialDatabase.connection.insert({
                id: user.id,
                name: user.name,
                email: user.email,
                password: user.password
            }).into(this.userTable)
        } catch (error: any) {
            throw new Error(error.message)
        }
    }

    public insertPost = async (post: post) => {
        try {
            await SocialDatabase.connection.insert({
                id: post.id,
                photo: post.photo,
                description: post.description,
                type: post.type,
                created_at: post.createdAt,
                author_id: post.authorId
            }).into(this.postTable)
        } catch (error:any) {
            throw new Error(error.message)
        }
    }
    
}