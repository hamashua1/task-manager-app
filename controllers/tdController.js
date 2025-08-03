import { tdModel } from '../models/td.js';

export const Task = async (req, res) => {
  try {
    const { task } = req.body;
    const results = new tdModel({ task });
    await results.save();
    res.status(200).json({ message: 'succefuly added to database', results });
  } catch (err) {
    res.status(400).json({ message: 'failed to add to db' });
  }
};

export const username = async (req, res) => {
  try {
    const { name } = req.body;
    const results = new tdModel({ name });
    await results.save();
    res.status(200).json({ message: 'user added to database' });
  } catch (err) {
    res.status(400).json({ message: 'failed to add to database' });
  }
}


export const comment = async(req,res)=>{
  try{
    const{comment} = req.body
    const results = new tdModel({comment})
    await results.save()
    res.status(200).json({mesaage:'succesfully jumped in the db'})
  }catch{
       res.status(401).json({mesaage:'db didnt accept'})
  }
}
