import { Router } from "express";
import {createOperation,getOperationsId,updateOperation,deleteOperation} from '../controllers/operationControllers.js'

let router = Router()

router
    .get('/operations/:UserId',getOperationsId)
    .post('/operations',createOperation)
    .put('/operations/:id',updateOperation)
    .delete('/operations/:id',deleteOperation)
    .get('/operations/:tipo')

export default router