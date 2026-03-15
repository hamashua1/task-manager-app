import express from 'express';
import { Task, comment } from '../controllers/tdController.js';
import { authenticate } from '../middleware/auth.js';

const router = express.Router();

router.post('/api/todo/createTask', authenticate, Task);
router.post('/api/todo/comment', authenticate, comment);

export default router;
