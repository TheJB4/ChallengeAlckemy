import {Sequelize} from "sequelize";

export let sequelize = new Sequelize('challenge1','root','',{
    host: 'localhost',
    dialect:'mysql'
})

