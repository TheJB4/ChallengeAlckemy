import { DataTypes } from "sequelize"
import {sequelize} from "../database/db.js"
import {Operation} from "./Operation.js"

export const User = sequelize.define('User',{
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password:{
        type: DataTypes.INTEGER,
        allowNull: false,
    },
})

User.hasMany(Operation)
Operation.hasOne(User)