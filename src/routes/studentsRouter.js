import { Router } from 'express';

import studentsController from '../controllers/StudentsController';

const router = Router();

router.get('/', studentsController.index);

export default router;