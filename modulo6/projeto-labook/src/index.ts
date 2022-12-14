import { app } from "./app"
import { postRouter } from "./routes/postRouter"
import { searchPostRouter } from "./routes/searchPostRouter"
import { socialRouter } from "./routes/socialRouter"

app.use("/labook", socialRouter)

app.use("/labook", postRouter)

app.use("/labook", searchPostRouter)