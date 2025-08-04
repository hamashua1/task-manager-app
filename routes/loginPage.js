import express from 'express'
import { signUp } from '../controllers/logPageController.js'
const router = express.Router()

router.post('/api/todo/signUp', signUp)
