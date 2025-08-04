import express from 'express'
import cors from 'cors'
import tdRoutes from './routes/td.js'
import cookieParser from 'cookie-parser'
import 'dotenv/config'
import bcrypt from 'bcrypt'
import {tdModel} from './models/td.js'
import { connectDB } from './database/db.js'
const app = express()
const port = process.env.PORT
app.use(cors())
app.use(express.json())
app.use(tdRoutes)
app.use(cookieParser())



// database connection
connectDB()

app.listen(port, () => {
  console.log(`application can be found on port ${port}`)
})
