import express from "express"
import { SearchPostController } from "../controller/searchPostController"

export const searchPostRouter = express.Router()

const socialController = new SearchPostController()

searchPostRouter.get("/busca-post/:id", socialController.searchPost)