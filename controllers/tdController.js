import tdModel from "../models/schema.js"


export const createTask = async(req,res)=>{
    try{
         const {task} = req.body
         const results = new tdModel({task})
         await results.save()
         res.status(200).json({message: 'succefuly added to database', results})
    }catch(err){
        res.json({message:'failed to add to db'})
    }
}