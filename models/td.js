import mongoose from 'mongoose';

const tdSchema = mongoose.Schema({
  task: { type: String },
  name: { type: String },
  email: { type: String },
  comment:{type: String},
  password: { type: String, required: true}
});

export const tdModel = mongoose.model('td', tdSchema);
