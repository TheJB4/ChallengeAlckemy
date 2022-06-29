import {User} from '../models/User.js'

export let getAllUsers = async (req,res)=>{
    try{
       res.send('Hola')

    }catch(err){
        console.log(err)
    }
}


export let createUser = async(req,res)=>{
    try{
        //throw new Error('Ocurrio un error al obtener todos los datos')
        let {email,password} = req.body

        let myTaskCreated = await User.create({
            email,
            password
        })

        res.json(myTaskCreated)
    }catch(err){
        res.status(404).json({"message":err.message})
    }
}

export let getOneUser= async (req,res)=>{
    try{
        //throw new Error('Ocurrio un error al obtener todos los datos')
        let {email} = req.params
        console.log(email)
        let myOneTask = await User.findAll({
            where:{
                email
            }
        })

        if(myOneTask.length === 0){
            throw new Error("El usuario no esta registrado: "+email)
        }

        res.json(myOneTask)
    }catch(err){
        res.status(404).json({"message":err.message})
    }
}
