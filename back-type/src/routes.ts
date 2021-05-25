import { Router } from 'express';

import authMiddleware from './app/middlewares/authMiddleware';

import UserController from './app/controllers/UserController';
import AuthController from './app/controllers/AuthController';
import RepasseCliente from './app/controllers/RepasseClienteController';
import RepassePrestador from './app/controllers/RepassePrestadorController';

const router = Router();

router.post('/users', UserController.store);
router.get('/users', authMiddleware, UserController.index);
router.post('/auth', AuthController.authenticate);
router.post('/repassecl', RepasseCliente.store);
router.post('/repasseop', RepassePrestador.store);

export default router;
