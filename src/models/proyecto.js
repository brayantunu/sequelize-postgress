
import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";


export const proyecto = sequelize.define('proyecto',{
    id:{
      type:DataTypes.INTEGER,
      primaryKey:true,
      autoIncrement:true
    },
    name:{
        type:DataTypes.STRING
    },
    priority:{
        type:DataTypes.INTEGER
    },
    description:{
        type:DataTypes.STRING
    },
    estado:{
        type:DataTypes.BOOLEAN
    }
})