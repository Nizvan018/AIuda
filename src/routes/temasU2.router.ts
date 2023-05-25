import { Router } from 'express';
import { principios_y_metodologia } from '../controllers/temasU2.controller';

const router:Router = Router();

router.get('/principios_y_metodologia', principios_y_metodologia);

export default router;