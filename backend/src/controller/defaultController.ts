import { Router } from 'express';
import UserController from './userController';

const router = Router();

router.use(UserController);
router.get('/test', async (req, res) => {
    res.status(200).send("Hallo Welt!")
})

export default router;
