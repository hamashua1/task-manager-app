import mongoose from 'mongoose';

const commentSchema = mongoose.Schema({
  comment: { type: String, required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
});

export const CommentModel = mongoose.model('Comment', commentSchema);
