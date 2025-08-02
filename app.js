import express from 'express'
import cors from 'express'
const app = express()
const port = 8000
app.use(cors())
app.use(express.json())




app.listen(port , ()=>{
   console.log(`application can be found on port ${port}`)
})

