import { Router } from "express";
//import {getAllTask,createTask,editTask,deleteTask,getOneTask} from '../controllers/taskControllers.js'
import {getOneUser,getAllUsers,createUser} from '../controllers/userControllers.js'
let router = Router()

router
    .get('/users',getAllUsers)
    .post('/users',createUser)
    .put('/users/:id')
    .delete('/users/:id')
    .get('/users/:email',getOneUser)

export default router
