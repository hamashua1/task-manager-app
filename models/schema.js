import mongoose from 'mongoose'


const tdSchema = new mongoose.Schema({
     Task : {type:String},
     user : {type:String},
     email: {type:String},
     password:{type:String, required:true}
})

const tdModel = mongoose.model('td',tdSchema)

export default tdModel


