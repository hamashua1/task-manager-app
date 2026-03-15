import mongoose from 'mongoose';

const taskSchema = mongoose.Schema({
  task: { type: String, required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
});

export const TaskModel = mongoose.model('Task', taskSchema);
