import { TaskModel } from '../models/task.js';
import { CommentModel } from '../models/comment.js';

export const Task = async (req, res) => {
  try {
    const { task } = req.body;
    const results = new TaskModel({ task, userId: req.userId });
    await results.save();
    res.status(201).json({ message: 'Task successfully added', results });
  } catch (err) {
    res.status(500).json({ message: 'Failed to add task' });
  }
};

export const comment = async (req, res) => {
  try {
    const { comment } = req.body;
    const results = new CommentModel({ comment, userId: req.userId });
    await results.save();
    res.status(201).json({ message: 'Comment successfully added', results });
  } catch (err) {
    res.status(500).json({ message: 'Failed to add comment' });
  }
};
