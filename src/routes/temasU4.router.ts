import { Router } from 'express';
import { clasificacion, desarrollos_y_aplicaciones, redes_neuronales, robotica } from '../controllers/temasU4.controller';

const router:Router = Router();

router.get('/robotica/conceptos_basicos', robotica);
router.get('/robotica/clasificacion', clasificacion);
router.get('/robotica/desarrollos_y_aplicaciones', desarrollos_y_aplicaciones);
router.get('/redes_neuronales/conceptos_basicos', redes_neuronales)
export default router;