//import {validationResult} from 'express-validator';

export const register =  (req, res) => {
    console.log(req.body)
    res.json({msj: "Registro con exito!"})
}
 
export const login = (req, res) => {
    res.json({msj: "Login con exito!"})
}