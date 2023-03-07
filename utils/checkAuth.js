import jwt from 'jsonwebtoken';
import AdminModel from '../models/Admin.js';

export default async (req, res, next) => {
  const token = (req.headers.authorization || '').replace(/Bearer\s?/, '');

  const throwError = () =>
    res.status(403).json({
      message: 'Нет доступа',
    });

  if (token) {
    try {
      const decodedUser = jwt.verify(token, 'secret123');

      let isAdmin = await AdminModel.findById(decodedUser._id);

      if (!isAdmin) throw new Error();

      req.userId = decodedUser._id;
      next();
    } catch (error) {
      throwError();
    }
  } else {
    throwError();
  }
};
