import { validationResult } from "express-validator";

export const handleValidationErrors = (req,res,next)=>{
    const error = validationResult(req);
        if(!error.isEmpty()){
            return res.status(400).json({message:'Validation failed',error:error.array().map(error=>({
                field:error.param,
                message:error.msg,
                }))
            });
        }
        next();
}