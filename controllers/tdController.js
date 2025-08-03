import tdModel from "../models/schema.js"


export const Task = async(req,res)=>{
    try{
         const {task} = req.body
         const results = new tdModel({task})
         await results.save()
         res.status(200).json({message: 'succefuly added to database', results})
    }catch(err){
        res.json({message:'failed to add to db'})
    }
}

export const users = async(req,res)=>{
    try{
         const {user} = req.body
         const results = new tdModel({user})
         await results.save()
         res.status(200).json({message:'user added to database'})
    }catch(err){
        res.status(400).json({message:'failed to add to database'})
    }

}