import { tdModel } from "../models/td.js"

export const signUp = async()=>{
    try{
    const {name , email, password} = req.body
    const  saltRounds = 10
    const hashPassword = await bcrypt.hash(password,saltRounds) 
    const results = new tdModel({name , email, password:hashPassword})
    await results.save()
    res.status(200).json({message:'credentials added to database'})
    }catch(err){
        res.status(401).json({message:'credentials failed to be added to database'})
    }
    }


