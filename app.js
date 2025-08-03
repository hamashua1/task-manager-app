import express from 'express'
import cors from 'cors'
import tdRoutes from './routes/td.js'
import cookieParser from 'cookie-parser'
import 'dotenv/config'
const app = express()
const port = process.env.PORT 
app.use(cors())
app.use(express.json())
app.use(tdRoutes)
app.use(cookieParser())





app.listen(port , ()=>{
   console.log(`application can be found on port ${port}`)
})

