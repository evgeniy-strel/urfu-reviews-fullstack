import express from 'express';
import * as UserController from '../controllers/UserController.js';
import { checkAuth, handleValidationErrors } from '../utils/index.js';
import { registerValidation, loginValidation } from './../validations/auth.js';

const router = express.Router();

router.post('/login', loginValidation, handleValidationErrors, UserController.login);

router.post('/register', registerValidation, handleValidationErrors, UserController.register);

router.get('/me', checkAuth, UserController.getMe);

export default router;
