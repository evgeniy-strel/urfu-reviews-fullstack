import express from 'express';
import * as UploadsController from '../controllers/UploadsController.js';
import { checkAuth } from '../utils/index.js';

const router = express.Router();

router.post('/', checkAuth, UploadsController.upload.single('image'), (req, res) => {
  res.json({
    url: `/uploads/${req.file.originalname}`,
  });
});

export default router;
