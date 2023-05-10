import { Router } from 'express';
import { clasificacion, clasificacion_rn, clasificacion_se, desarrollos_y_aplicaciones, desarrollos_y_aplicaciones_ld, desarrollos_y_aplicaciones_pln, desarrollos_y_aplicaciones_rn, desarrollos_y_aplicaciones_se, desarrollos_y_aplicaciones_va, logica_difusa, pln, redes_neuronales, robotica, sistemas_expertos, vision_artificial } from '../controllers/temasU4.controller';

const router:Router = Router();

router.get('/robotica/conceptos_basicos', robotica);
router.get('/robotica/clasificacion', clasificacion);
router.get('/robotica/desarrollos_y_aplicaciones', desarrollos_y_aplicaciones);
router.get('/redes_neuronales/conceptos_basicos', redes_neuronales)
router.get('/redes_neuronales/clasificacion',clasificacion_rn)
router.get('/redes_neuronales/desarrollos_y_aplicaciones_rn',desarrollos_y_aplicaciones_rn)
router.get('/vision_artificial/conceptos_basicos',vision_artificial)
router.get('/vision_artificial/desarrollos_y_aplicaciones',desarrollos_y_aplicaciones_va)
router.get('/logica_difusa/conceptos_basicos',logica_difusa)
router.get('/logica_difusa/desarrollos_y_aplicaciones_ld',desarrollos_y_aplicaciones_ld)
router.get('/procesamiento_del_lenguje_natural/conceptos_basicos',pln)
router.get('/procesamiento_del_lenguje_natural/desarrollos_y_aplicaciones',desarrollos_y_aplicaciones_pln)
router.get('/sistemas_expertos/conceptos_basicos',sistemas_expertos)
router.get('/sistemas_expertos/clasificacion',clasificacion_se)
router.get('/sistemas_expertos/desarrollos_y_aplicaciones',desarrollos_y_aplicaciones_se)
export default router;