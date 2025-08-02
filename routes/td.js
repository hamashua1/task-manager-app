import { createTask } from "../controllers/tdController.js"
const router = express.Router()





router.post('/api/todo/createTask', createTask) 



export default router