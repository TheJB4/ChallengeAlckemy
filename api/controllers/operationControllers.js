//Aqui estaran todos los controladores que necesitemos para que nuestra api pueda brindar informacion
import {Operation} from '../models/Operation.js'

export let createOperation = async(req,res)=>{
    try{
        //throw new Error('Ocurrio un error al obtener todos los datos')
        let {concept,amount,type,UserId} = req.body

        let myTaskCreated = await Operation.create({
            concept,
            amount,
            type,
            UserId,
        })

        res.json(myTaskCreated)
    }catch(err){
        res.status(404).json({"message":err.message})
    }
}

export let getOperationsId = async (req,res)=>{
    try{
        //throw new Error('Ocurrio un error al obtener todos los datos')
        let {UserId} = req.params
        console.log(UserId)
        let myOperationsId = await Operation.findAll({
            where:{
                UserId
            },
            limit: 10,
            order: [
                ['createdAt','DESC']
            ],
        })

        if(myOperationsId.length === 0){
            throw new Error("No se encontraron las operaciones del usuario: "+id)
        }

        res.json(myOperationsId)
    }catch(err){
        res.status(404).json({"message":err.message})
    }
}

export let updateOperation = async (req,res) =>{
    try{
        let {id} = req.params
        let {concept,amount,type,} = req.body

        let myEditOperation = await Operation.findByPk(id)
        myEditOperation.concept = concept
        myEditOperation.amount = amount
        myEditOperation.type = type
        myEditOperation.save()

        res.json(updateOperation)
    }catch(err){
        res.status(404).json({"message":err.message})
    }
}

export let deleteOperation = async (req,res) =>{
    try{
        //throw new Error('Ocurrio un error al obtener todos los datos')
        let {id} = req.params
        await Operation.destroy({
            where:{
                id
            }
        })
        res.status(202).json({"message":"El elemento se elimino con exito!"})
    }catch(err){
        res.status(404).json({"message":err.message})
    }
}
