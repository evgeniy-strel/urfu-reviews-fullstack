import express from 'express';
import * as PostController from '../controllers/PostController.js';
import { checkAuth, handleValidationErrors } from '../utils/index.js';
import { postCreateValidation } from './../validations/post.js';

const router = express.Router();

router.get('/', PostController.getAll);

router.post('/', checkAuth, postCreateValidation, handleValidationErrors, PostController.create);

router.get('/:id', PostController.getOne);

router.patch(
  '/:id',
  checkAuth,
  postCreateValidation,
  handleValidationErrors,
  PostController.update,
);

router.delete('/:id', checkAuth, PostController.remove);

export default router;
