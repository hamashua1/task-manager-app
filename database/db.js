import mongoose from 'mongoose'
import 'dotenv/config'

export const connectDB = async ()=>{
  await mongoose.connect(process.env.MONGODB_URI)
  console.log('Database is firing 🚀🔥')
}

