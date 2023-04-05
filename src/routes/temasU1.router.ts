import { Router } from 'express';
import { definicion_historia } from '../controllers/temasU1.controller';

const router:Router = Router();

router.get('/definicion_historia', definicion_historia);

export default router;