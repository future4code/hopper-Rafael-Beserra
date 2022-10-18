import express from 'express'
import { MovieController } from '../controller/MovieController'

export const movieRouter = express.Router()

const movieController = new MovieController()

movieRouter.post("/insert", movieController.addMovie)


