import { app } from "./app"
import { socialRouter } from "./routes/socialRouter"

app.use("/labBook", socialRouter)