import { Router } from 'express';
import { representacion_de_conocimientos } from '../controllers/temasU3.controller';

const router:Router = Router();

router.get('/representacion_conocimientos', representacion_de_conocimientos);

export default router;