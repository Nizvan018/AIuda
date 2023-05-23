import { Router } from 'express';
import { representacion_de_conocimientos, metodos_de_inferencia, reglas_de_produccion, sintaxis_de_las_reglas, semantica_reglas, arquitectura_sistema } from '../controllers/temasU3.controller';

const router:Router = Router();

router.get('/representacion_conocimientos', representacion_de_conocimientos);
router.get('/metodos_de_inferencia', metodos_de_inferencia);
router.get('/reglas_de_produccion', reglas_de_produccion);
router.get('/sintaxis_de_las_reglas', sintaxis_de_las_reglas );
router.get('/semantica_reglas', semantica_reglas);
router.get('/arquitectura_sistema', arquitectura_sistema);

export default router;