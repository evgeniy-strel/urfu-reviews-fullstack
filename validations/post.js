import { body } from 'express-validator';

export const postCreateValidation = [
  body('title', 'Введите заголовок статьи').isString(),
  body('text', 'Введите текст статьи').isLength({ min: 10 }).isString(),
  body('tags', 'Неверный формат тэгов(укажите массив)').optional().isArray(),
  body('imgUrl', 'Неверная ссылка на изображение').optional().isString(),
];
