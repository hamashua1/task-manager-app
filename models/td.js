import mongoose from 'mongoose';

const tdSchema = mongoose.Schema(
  {
    task: { type: String, required: true },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  },
  { timestamps: true }
);

export const tdModel = mongoose.model('td', tdSchema);
