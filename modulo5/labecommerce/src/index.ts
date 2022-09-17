import { app } from "./app";
import { postCreateUser } from "./endpoints/registerUser";
import { registerProduct } from "./endpoints/registerProduct";
import { searchUser } from "./endpoints/serachUser";
import { searchProduct } from "./endpoints/searchProduct";
import { registerPurchase } from "./endpoints/registerPurchase";
import { searchHistoryPurchase } from "./endpoints/searchHistoryPurchase";

app.post("/users", postCreateUser)
app.get("/users", searchUser)

app.post("/products", registerProduct)
app.get("/products", searchProduct)

app.post("/purchases", registerPurchase)
app.get("/users/:user_id/purchases", searchHistoryPurchase)