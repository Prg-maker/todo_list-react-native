import {Router} from 'express'
import {ProfileController} from './controllers/profile-controller'

const router = Router()


router.post('/' , new ProfileController().handle)


export default router 