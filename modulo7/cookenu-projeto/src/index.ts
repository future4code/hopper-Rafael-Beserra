import app from "./controller/app"
import { recipeRouter } from "./controller/routers/recipeRouter"
import { userRouter } from "./controller/routers/userRouter"


app.use('/user/', userRouter)
app.use('/user/', recipeRouter)
