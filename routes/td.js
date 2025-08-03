import express from 'express'
import { Task } from "../controllers/tdController.js"
import { username } from '../controllers/tdController.js'
const router = express.Router()

router.post('/api/todo/createTask', Task) 
router.post('/api/todo/user', username)



export default router