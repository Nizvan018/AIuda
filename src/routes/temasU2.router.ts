import { Router } from 'express';
import { principios_y_metodologia, paradigmas, mapas_conceptuales, redes_semanticas, razonamiento_monotono, otras_logicas, razonamiento_probabilistico,teorema_de_Bayes } from '../controllers/temasU2.controller';

const router: Router = Router();

router.get('/principios_y_metodologia', principios_y_metodologia);
router.get('/paradigmas', paradigmas);
router.get('/mapas_conceptuales', mapas_conceptuales);
router.get('/redes_semanticas', redes_semanticas);

router.get('/razonamiento_monotono', razonamiento_monotono);
router.get('/otras_logicas', otras_logicas);
router.get('/razonamiento_probabilistico',razonamiento_probabilistico);
router.get('/teorema_de_Bayes',teorema_de_Bayes);

export default router;