import { app } from "./app"
import { postRouter } from "./routes/postRouter"
import { socialRouter } from "./routes/socialRouter"

app.use("/labook", socialRouter)

app.use("/labook", postRouter)