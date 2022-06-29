import app from "./app.js";
import {sequelize} from "./database/db.js"

/*
//--Descomentar estas lineas y colocar el sequelize.sync() para crear las tablas ---
//--Luego comentar de nuevo
import {} from "../api/models/Operation.js"
import {} from "../api/models/User.js"
*/

let port = process.env.port || 3500

app.listen(port,async()=>{
    console.log(`Server is listening in https:localhost:${port}`)

    await sequelize.sync({force:false});
    console.log('La conexion con la base de datos fue un exito!')
})