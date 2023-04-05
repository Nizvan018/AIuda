import { Router } from 'express';
import { definicion_historia, habilidades_proceso, proceso_razonamiento } from '../controllers/temasU1.controller';

const router:Router = Router();

router.get('/definicion_historia', definicion_historia);
router.get('/habilidades_proceso', habilidades_proceso);
router.get('/proceso_razonamiento', proceso_razonamiento)

export default router;