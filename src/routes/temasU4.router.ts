import { Router } from 'express';
import { clasificacion, clasificacion_rn, desarrollos_y_aplicaciones, desarrollos_y_aplicaciones_rn, desarrollos_y_aplicaciones_va, redes_neuronales, robotica, vision_artificial } from '../controllers/temasU4.controller';

const router:Router = Router();

router.get('/robotica/conceptos_basicos', robotica);
router.get('/robotica/clasificacion', clasificacion);
router.get('/robotica/desarrollos_y_aplicaciones', desarrollos_y_aplicaciones);
router.get('/redes_neuronales/conceptos_basicos', redes_neuronales)
router.get('/redes_neuronales/clasificacion',clasificacion_rn)
router.get('/redes_neuronales/desarrollos_y_aplicaciones_rn',desarrollos_y_aplicaciones_rn)
router.get('/vision_artificial/conceptos_basicos',vision_artificial)
router.get('/vision_artificial/desarrollos_y_aplicaciones',desarrollos_y_aplicaciones_va)
export default router;