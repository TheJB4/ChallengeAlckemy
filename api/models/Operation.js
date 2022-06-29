import { DataTypes } from "sequelize"
import {sequelize} from "../database/db.js"


export const Operation = sequelize.define('Operation',{
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    concept: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    amount:{
        type: DataTypes.INTEGER
    },
    type:{
        type: DataTypes.STRING
    }
})