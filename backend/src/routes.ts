import {Router} from 'express'
import {ProfileController} from './controllers/create-profile-controller'
import {LoginProfileController} from './controllers/login-profile-controller'
import {CreateTasksController} from './controllers/create-tasks-controller'
import {ListAllTasksController} from './controllers/list-all-tasks-controller'
import { UpdateTaskController } from './controllers/update-task-controller'

const router = Router()


router.post('/' , new ProfileController().handle)
router.post('/login' , new LoginProfileController().handle)
router.post('/tasks' , new CreateTasksController().handle)
router.get('/tasks/:profileId' , new ListAllTasksController().handle)
router.put('./task' , new UpdateTaskController().handle)

export default router 