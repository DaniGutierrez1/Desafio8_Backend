import { Router } from "express";
import { CustomError } from "../services/error/customError.service.js";
import { EError } from "../enums/EError.js";
import { createUserErrorMsg } from "../services/error/createUserError.service.js";

//PASAR TODO ESTO A SESSIONS. ES MAS FACIL YA QUE TENEMOS LOS VALIDADORES Y SOLO HACE FALTA ADAPTAR EL MANEJADOR DE ERRORES


const router = Router();
const users=[];

router.get("/",(req,res)=>{
    res.json({status:"success",data:users});
})
router.post("/",(req,res)=>{
    const{name,lastname,email}=req.body;
    if(!name || !lastname ||!email){
        CustomError.createError({
            name:"error createUser",
            cause:createUserErrorMsg(req.body),
            message:"Datos invalidos para crear el usuario",
            errorCode:EError.INVALID_JSON
        });
    };
    users.push(req.body);
    res.json({status:"success",message:"usuario creado"})
})

export { router as usersRouter};