import app from "./controller/app";
import { menuRouter } from "./controller/routers/menuRouter";
import { orderRouter } from "./controller/routers/orderRouter";
import { userRouter } from "./controller/routers/userRouter";


app.use('/pizzaria', menuRouter)
app.use('/pizzaria', userRouter)
app.use('/pizzaria', orderRouter)