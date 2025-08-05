import express from 'express'
import { signUp } from '../controllers/logPageController.js'
import { tdModel } from '../models/td.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
const router = express.Router()

router.post('/api/todo/signUp', signUp)
router.post('/api/todo/signIn', async(req,res)=>{
    const {email,password} = req.body
    const results = await tdModel.findOne({email})
    if(!results){
    return res.status(401).json({message:'email mismatch'})
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
    })






export default router




