import express from 'express'
import cors from 'express'
import tdRoutes from '../routes/td.js'
import cookieParser from 'cookie-parser'
import 'dotenv/config'
const app = express()
const port = 8000
app.use(cors())
app.use(express.json())
app.use(tdRoutes)
app.use(cookieParser())





app.listen(port , ()=>{
   console.log(`application can be found on port ${port}`)
})

