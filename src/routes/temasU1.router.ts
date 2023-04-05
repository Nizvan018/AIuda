import { Router } from 'express';
import { definicion_historia, habilidades_proceso } from '../controllers/temasU1.controller';

const router:Router = Router();

router.get('/definicion_historia', definicion_historia);
router.get('/habilidades_proceso', habilidades_proceso)

export default router;