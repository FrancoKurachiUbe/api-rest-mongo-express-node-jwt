import express from 'express';
import { login, register } from '../controllers/auth.controller.js';
import {body} from 'express-validator';
import { validatioResultExpress } from '../middlewares/validationResultExpress.js';
const router = express.Router();

router.post("/register",
    [ 
        body('email', 'Formato de email Incorrecto.')
        .trim()
        .isEmail()
        .normalizeEmail(),
        body('password', 'password Incorrecto minimo 6 caracteres.').trim().isLength({ min:6 }),
        body('password', 'Formato de password Incorrecto.').custom((value, {req}) => {
            if(value !== req.body.repassword) {
                throw new Error('Las contraseñas no coinciden.')
            }
            return value
        })
    ],
    validatioResultExpress,
    register
);
router.post("/login",
[
    body('email', 'Formato de email Incorrecto.')
        .trim()
        .isEmail()
        .normalizeEmail(),
],
validatioResultExpress,
login
);
//router.post("/", )


export default router;