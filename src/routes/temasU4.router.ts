import { Router } from 'express';
import { clasificacion, robotica } from '../controllers/temasU4.controller';

const router:Router = Router();

router.get('/robotica/conceptos_basicos', robotica);
router.get('/robotica/clasificacion', clasificacion);
export default router;