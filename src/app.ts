import express, { Application, NextFunction, Request, Response } from 'express';
import authRouter from './auth/authRoutes';
import secretCodeRouter from './secretCode/secretCodeRoutes';
import globalRouter from './global/globalRoutes';
import productRouter from './product/productRoutes';
import orderRouter from './order/orderRoutes';
import tokenmessageRouter from './tokenmessage/tokenmessageRoutes';

import cors from 'cors';

const app: Application = express();

app.use(
  cors({
    origin: '*',
    methods: ['GET', 'POST'],
    credentials: true,
  })
);
app.use(express.json());

app.use(secretCodeRouter);
app.use(productRouter);
app.use(orderRouter);
app.use(authRouter);
app.use(globalRouter);
app.use(tokenmessageRouter);

app.use(function (err: any, req: Request, res: Response, next: NextFunction) {
  res.status(err.statusCode ? err.statusCode : 500).send({ message: err.message, type: err.errorType });
});

export default app;
