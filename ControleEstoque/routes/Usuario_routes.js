import express from 'express';
import { login } from '../controllers/usuarioController.js';

const router = express.Router();

router.post('/login', login);

export default router;
