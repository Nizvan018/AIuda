import { Router } from 'express';
import { main } from '../controllers/main.controller';

const router:Router = Router();

router.get('/', main);

export default router;