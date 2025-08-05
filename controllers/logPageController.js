import { tdModel } from "../models/td.js"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import cookieParser from 'cookie-parser'

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

export const signIn = async(req,res)=>{
    const {email,password} = req.body
    const results = await tdModel.findOne({email})
    if(!results){
    return res.status(401).json({message:'email not found in our system, sign up'})
    }
    const isPasswordCorrect = await bcrypt.compare(password, results.password)
    if(!isPasswordCorrect){
    return res.status(401).json({message:'password miss-matched!'})
}
    const token = jwt.sign ({id:results._id}, process.env.JWT_SECRET, {expiresIn:'1h'})
    res.cookie('token',token, {
    httpOnly: true,
    secure:false,
    samesite: 'lax',
    maxAge: 60 * 60 * 1000 })
    res.status(200).json({message:'sign in successful',results, isPasswordCorrect})
    }    


