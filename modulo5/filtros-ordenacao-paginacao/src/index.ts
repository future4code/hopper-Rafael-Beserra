import { app } from "./app";
import { getAllFilter } from "./endpoints/getAllFilter/getAllFilter";
import { getAllUsers } from "./endpoints/getAllUsers/getAllUsers";
import { getPages } from "./endpoints/GetForPage/getFroPage";
import { getUsersForName } from "./endpoints/getUserForName/getUserForName";
import { getUsersForType } from "./endpoints/getUserForType/getUserForType";
import { getUsersForTypeOrName } from "./endpoints/getUserNameOrType/getUserNameOrType";

app.get("/users", getAllUsers)

app.get("/users/:name", getUsersForName)

app.get("/users/type/:type", getUsersForType)

app.get("/type-or-name", getUsersForTypeOrName)

app.get("/for-page/:page", getPages)

app.get("/all-filter", getAllFilter)