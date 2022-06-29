import express from "express";
import routerOperation from "./routes/operations.routes.js"
import routerUser from "./routes/user.routes.js"
let app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.use(routerOperation)
app.use(routerUser)


export default app