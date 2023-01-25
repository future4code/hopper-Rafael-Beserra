import app from "./controller/app";
import { menuRouter } from "./controller/routers/menuRouter";
import { userRouter } from "./controller/routers/userRouter";


app.use('/pizzaria', menuRouter)
app.use('/pizzaria', userRouter)
