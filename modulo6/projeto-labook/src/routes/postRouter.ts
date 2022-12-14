import express from "express"
import { PostController } from "../controller/postController"

export const postRouter = express.Router()

const postController = new PostController()

postRouter.post("/post-criar", postController.createPost)