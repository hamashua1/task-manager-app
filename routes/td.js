import { Task } from "../controllers/tdController.js"
const router = express.Router()

router.post('/api/todo/createTask', Task) 
router.post('/api/todo/user', users)



export default router