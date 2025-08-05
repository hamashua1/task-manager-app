import { tdModel } from "../models/td.js"
import bcrypt from 'bcrypt'

export const signUp = async(req,res)=>{
    try{
    const {name , email, password} = req.body
    const  saltRounds = 10
    const hashPassword = await bcrypt.hash(password,saltRounds)
    const results = new tdModel({name , email, password:hashPassword}) 
    await results.save()
    res.status(200).json({message:'credentials added to database', results})
    }catch(err){
        res.status(401).json({message:'credentials failed to be added to database'})
    }
    }


