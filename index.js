import express from 'express';
import mongoose from 'mongoose';
import { authRouter, postRouter, uploadsRouter } from './routes/index.js';

mongoose
  .connect(
    'mongodb+srv://admin:123321zhenya2003@cluster0.n58kpge.mongodb.net/blog?retryWrites=true&w=majority',
  )
  .then(() => {
    console.log('DB OK');
  })
  .catch((error) => {
    console.log('DB error', err);
  });

const app = express();

app.use(express.json());

app.use('/auth', authRouter);

app.use('/posts', postRouter);

app.use('/uploads', uploadsRouter);
app.use('/uploads', express.static('uploads'));

app.listen(4444, (err) => {
  if (err) {
    return console.log(err);
  }

  console.log('Server OK');
});
