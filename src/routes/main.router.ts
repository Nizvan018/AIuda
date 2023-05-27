import { Router } from 'express';
import { bibliografia, aboutus, main } from '../controllers/main.controller';

const router:Router = Router();

router.get('/', main);
router.get('/bibliografia', bibliografia);
router.get('/about-us', aboutus);

export default router;