import express from 'express';

const userRouter = express.Router();

userRouter.use((req, res, next) => {
  console.log('Обработчик users')
  next()
})

userRouter.get('/login', (req, res) => {
  console.log('login')
  res.send('login')
})

userRouter.get('/register', (req, res) => {
  console.log('register')
  res.send('register')
})

export {userRouter};