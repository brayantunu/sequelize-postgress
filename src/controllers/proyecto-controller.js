import {proyecto} from "../models/proyecto.js"

export const crearproyecto= async (res,req)=>{

    const {name,priority,description,estado}=req.body
    try {
        const{id} =res.params
        const newproyect = await proyecto.create({
            name,
            description,
            priority,
            estado
        })
        res.status(200).json({menssage:'recurso creado con exito ',newproyect:{
            id:newproyect.id,
            name:newproyect.name
        }})
    } catch (error) {
        return res.status(500).json({message:error.message})
    }

    
}