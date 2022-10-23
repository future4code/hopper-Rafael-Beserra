import express from "express"
import { SocialController } from "../controller/socialController"

export const socialRouter = express.Router()

const socialController = new SocialController()

socialRouter.post("/criar-usuario", socialController.createUser)