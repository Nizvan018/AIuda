import { Router } from 'express';
import { bibliografia, main } from '../controllers/main.controller';

const router:Router = Router();

router.get('/', main);
router.get('/bibliografia', bibliografia);

export default router;