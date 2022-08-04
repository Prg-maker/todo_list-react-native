import {Router} from 'express'
import {ProfileController} from './controllers/create-profile-controller'
import {LoginProfileController} from './controllers/login-profile-controller'

const router = Router()


router.post('/' , new ProfileController().handle)
router.post('/login' , new LoginProfileController().handle)


export default router 