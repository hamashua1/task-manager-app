import express from 'express'
import { signIn, signUp } from '../controllers/logPageController.js'


const router = express.Router()

router.post('/api/todo/signUp', signUp)
router.post('/api/todo/signIn', signIn)


export default router




